# Hippo Raft

From Matt Fielding

An extensive knowledge-base of HTML prototyping resources including training materials,

## Installation and Setup Instructions

### CLI - Node v12 and above required
```sh
# Installation:
npm i

# Start development:
npm start

# Production build:
npm build
```

### View App:
Visit `localhost:8080` your browser.

### Create new pages:
For every file template you create (via Nunjucks, Markdown, 11ty.js etc.) within the `src` directory, a relative page will be generated in the `public` directory, named after the filename of your choosing.

### 11ty Config
The `.eleventy.js` config consists of which directory should it be watching files from and where to compile them to. Eleventy can still run without this config but it'll use default settings. More info from the [docs](https://www.11ty.dev/docs/config/).

## References

- [GDS Style Guide](https://design-system.service.gov.uk/styles//)
- Eleventy (11ty)
    - [Documentation](https://www.11ty.dev/docs/)
    - [Template Languages](https://www.11ty.dev/docs/languages/)
    - [Starter Projects](https://www.11ty.dev/docs/starter/)