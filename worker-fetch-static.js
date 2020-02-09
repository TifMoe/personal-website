addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})

const _types = {
    'css': 'text/css',
    'html': 'text/html',
    'json': 'application/json',
    'js': 'application/javascript',
    'png': 'image/png'
}

getType = function(path) {
    path = String(path);
    var last = path.replace(/^.*[/\\]/, '').toLowerCase();
    var ext = last.replace(/^.*\./, '').toLowerCase();
  
    var hasPath = last.length < path.length;
    var hasDot = ext.length < last.length - 1;
  
    return (hasDot || !hasPath) && _types[ext] || null;
};
  

async function handleRequest(event) {
    let request = event.request
    let cache = caches.default
    let response = await cache.match(request)

    if (response) {
        return response
    }

    const parsedUrl = new URL(request.url)
    let path = parsedUrl.pathname

    var cacheMe = true
    let lastSegment = path.substring(path.lastIndexOf('/'))
    if (lastSegment.indexOf('.') === -1) {
        path += 'index.html'
        cacheMe = false
    }

    path = 'public' + path
    const value = await static.get(path, "stream")
    const mime_type = getType(path)

    response = new Response(value, { headers: { "Content-Type": mime_type } })
    if (cacheMe) {
        event.waitUntil(cache.put(request, response.clone()))
    }

    return response
}