# Storitev CTS

Gre za kontejneriziran strežnik, ki teče na kubernetesu in omogoča odjemalcem ugotoviti kateri strežnik je najbolj primeren za povezavo.

## Infrastruktura

Infrastruktura je definirana v ločenem git repozitoriju: `https://github.com/Andrew920/cts-infrastructure`  
Repozitorij za infrastrukturo je ločen saj se pri zvezni integraciji posodobijo kubernetes viri, kar bi povzročilo neskončno zanko. Boljše je tudi iz vidika preglednosti. Ločena repozitorija omogočata tudi ločen dostop do definicije infrastrukture. Tako se dodeli dostop do infrastrukure le tistim, ki ga potrebujejo. Uporabi se praksa GitOps kar posledično pomeni, da so spremembe virov v git repozitoriju replicirane na vse strežnike.

## Strežnik
Gre za node.js aplikacijo, ki odgovarja na `/ping` in `/version` zahteve. Uporabi popularno knjižnjico express.

## Testi
Napisan je preprost test, ki preveri delovanje `/ping` endpointa.

## CI/CD cevovod

Cevovod je sestavljen s pomočjo dveh orodij. Orodje CircleCI skrbi za zvezno integracijo ArgoCD pa za zvezno dostavo. V koraku zvezne integracije se koda testira in zgradi ter doda v Harbor repozitorij, kjer je navoljo za kasnejšo uporabo. Vsebniki se v Harbor varnostno testirajo in v primeru da je odkrita kritična ranljivost se onemogoči dostop do teh vsebnikov. To onemogoči postavitev vsebnikov na produkcijsko okolje. V primeru dodajanja kode na master vejo se izvede še dodaten korak v CircleCI, ki posodobi konfiguracijo v sekundarnem repozitoriju, kjer se nahajajo kubernetes viri, ki definirajo strežnik. Ko orodje posodobi te vire v git strežniku ArgoCD avtomatsko zazna spremembe in posodobi te vire v vseh kubernetes gručah.