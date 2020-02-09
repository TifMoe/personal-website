var fs = require("fs")
var glob = require("glob")
var request = require("request")

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const CLOUDFLARE_AUTH_EMAIL = process.env.CLOUDFLARE_AUTH_EMAIL
const CLOUDFLARE_AUTH_KEY = process.env.CLOUDFLARE_AUTH_KEY
const CLOUDFLARE_NAMESPACE = process.env.CLOUDFLARE_NAMESPACE

glob("public/**/*", {nodir: true}, function (er, files) {

  files.forEach(filename => {
    file = fs.readFile(filename, (err, data) => {
        const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CLOUDFLARE_NAMESPACE}/values/${filename}`
        request.put(url, {
            body: data,
            headers: {
                "X-Auth-Email": CLOUDFLARE_AUTH_EMAIL,
                "X-Auth-Key": CLOUDFLARE_AUTH_KEY
            },
        }, (err, response, body) => {
            if (err) {
              console.log(err)
            }
        })
    })  
  })
})