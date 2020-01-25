http://sujoyu.github.io/plantuml-previewer/

```
Main -> Facade : scrape
Facade -> API : get
API -> formatter : format
API <-- formatter: formatedData
Facade <-- API :formatedData
Main <-- Facade : result
```