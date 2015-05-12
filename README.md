## Goal

The goal of this exercise is to write a simple, HTTP file server. Clone this repository and `cd` into the directory you cloned it in. All notes here are relative to this directory.

A skeleton server has been defined for you in `server.js` and should serve as the basis for your application. You will run your application with `node server.js` and visit it at `localhost:1337` in the browser

## Understanding the test cases

To test that you have completed this exercise successfully, create an arbitrarily named file in this directory, like `cats_are_cool.html` with any content you want (e.g. `<html><body><h1>Cats are cool</h1></body></html>`) and make sure it works when you request it via `localhost:1337/cars_are_cool.html`.

## Recommended Approach

1. Read everything until "The next levels" in its entirety.
1. Start by creating an `index.html` file with valid HTML inside of it, and seeing if you can get that to be served by node (`localhost:1337/index.html`).
1. Repeat what you did with `index.html` with some other file like, `about.html`.
1. Use what you've done and "Things to use in this exercise" to figure out a general way to handle requests for files in this directory.


## Things to use in this exercise

* [`req.url`](https://nodejs.org/api/http.html#http_message_url) - allows you to see the relative part of the URL the user hit (e.g. `/foo` in `http://google.com/foo`)
* [`fs.readFile`](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

## Next levels

1. Add links between the pages you have added locally.

1. If a user provides [query string](http://en.wikipedia.org/wiki/Query_string) as part of the URL make the response a page consisting just of the query params (fields and values). [`url.parse`](https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) may be helpful.

1. Generally, if a user requests a page that does not exist, a `404 Not Found` response will be issued by the server and a fun page will be rendered. For a good example of this checkout [Github's 404 page](https://github.com/asdhasdasd). Add this functionality to your server, so that any arbitrary request to a non-existant resource returns a [404 HTTP status code](https://www.flickr.com/photos/girliemac/6508022985), regardless of if it has a query string or not.