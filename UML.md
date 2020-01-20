http://sujoyu.github.io/plantuml-previewer/

```
Main -> Facade : scrape
Facade -> API : get
API -> Formatter : format
API <-- Formatter: formatedData
Facade <-- API :formatedData
Main <-- Facade : result
```