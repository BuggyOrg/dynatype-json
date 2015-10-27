# Dynatype JSON

A dynatype to json converter to export dynatypes.

# Usage

```js
var d2JSON = require('dynatype-json')
var /* some dynatype definitions */
var jsonFromDescriptor = d2JSON(desc);
var jsonFromTranslator = d2JSON(translator);
var jsonFromArray = d2JSON([desc, translator, /*...*/])
```

The d2JSON API is simply a function that takes one descriptor, one translator
or an array of them. It always creates a JSON document of the following format.

```json
{
  "descriptors" : ["..."],
  "translators" : ["..."]
}
```

Where the descriptors and translators array contain the given objects.
