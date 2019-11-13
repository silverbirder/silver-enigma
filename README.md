# silver-enigma
this repository is the tool to monitor the visual regression.

# Output
![backstopjs](https://res.cloudinary.com/silverbirder/image/upload/v1573651959/backstopjs/backstopjs.png)

# Usage
## Prepare
You just write the url you want to monitor in backstop.json (scenarios.url, scenarios.label).

ex.
```bash
  "scenarios": [
    {
      "label": "basic",
      "url": "https://www.amazon.co.jp/s?k=github"
    }
  ]
```

If you want to execute a specific script, add a key and value.

```bash
  "scenarios": [
    {
      "label": "basic",
      "url": "https://www.amazon.co.jp/s?k=github",
      "onReadyScript": "puppet/onReadyInSearch.js"
    }
  ]
```

## Test
```bash
$ npm install
$ npm run reference
$ npm test
```

## CircleCI
Set environments

* VCS_TYPE
* USERNAME
* CIRCLE_TOKEN

※ check [here](https://circleci.com/docs/2.0/artifacts/#downloading-all-artifacts-for-a-build-on-circleci)