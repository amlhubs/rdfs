# @amlhubs/rdfs

## Identity

| Field | Value |
|---|---|
| Metamodel | `rdfs` |
| Specification | RDF Schema 1.1 |
| Status | W3C Recommendation |
| Date | 25 February 2014 |
| URL | https://www.w3.org/TR/rdf-schema/ |
| Editors | Dan Brickley, R.V. Guha |
| Namespace IRI | http://www.w3.org/2000/01/rdf-schema# |
| Prefix | `rdfs:` |
| Package | `@amlhubs/rdfs@0.0.1` |
| Upstream | `@amlhubs/rdf` (peerDependency) |
| Repository | https://github.com/amlhubs/rdfs |
| License | UNLICENSED (proprietary) |

## Abstract

`@amlhubs/rdfs` is a TypeScript metamodel implementation of **RDF Schema 1.1**, the W3C Recommendation that layers a vocabulary-description language on top of RDF. Where RDF supplies the universal triple primitive — subject, predicate, object expressed as IRIs and literals — RDFS supplies the schema layer that gives those triples *meaning at the class and property level*: it lets a publisher say that two classes stand in a subclass relationship, that a property is a refinement of another, and that any subject of a given property must be an instance of a particular class. The package exposes the six RDFS classes (`rdfs:Resource`, `rdfs:Class`, `rdfs:Literal`, `rdfs:Datatype`, `rdfs:Container`, `rdfs:ContainerMembershipProperty`) and the nine core RDFS properties (`rdfs:subClassOf`, `rdfs:subPropertyOf`, `rdfs:domain`, `rdfs:range`, `rdfs:label`, `rdfs:comment`, `rdfs:seeAlso`, `rdfs:isDefinedBy`, `rdfs:member`) as extensible base classes and interfaces — pure RDFS, peer-dependent on `@amlhubs/rdf` for the underlying IRI / Literal / Triple primitives.

## Business Value

**Vocabulary publishing.** RDFS is the smallest sufficient instrument for publishing a controlled vocabulary on the open web. Any agent — human author, ageni runtime, third-party tool — that needs to declare "Person is a subclass of Agent", "homepage has a Person in its domain and a Document in its range", or "the preferred label of this concept is 'Customer'" can do so in pure RDFS with zero ontology-language overhead. A first-class TypeScript surface lowers the activation cost of authoring such vocabularies inside the amlhubs and ageni ecosystems and lets agents emit conformant RDFS straight from typed APIs.

**Foundation for OWL and SKOS.** Both OWL 2 (the W3C ontology language) and SKOS (Simple Knowledge Organization System) are explicitly defined as extensions of RDFS — every OWL class is an `rdfs:Class`, every OWL property is an `rdf:Property` constrained by RDFS `domain`/`range`, every SKOS concept is annotated with `rdfs:label` and organized via `skos:broader`/`skos:narrower` that themselves echo `rdfs:subClassOf` semantics. Implementing RDFS as its own clean metamodel package is therefore a precondition for shipping conformant `@amlhubs/owl` and `@amlhubs/skos` packages downstream — the entire Semantic Web stack rests on it.

**Agentic runtime leverage.** The ageni runtime reasons over typed graphs: agents query "what subclasses inherit this property?", "what is the most specific class that admits this resource?", "what are the human-readable labels for this concept in the user's locale?". RDFS encodes exactly those queries as a tiny, decidable inference closure (six entailment rules in §7 of RDF 1.1 Semantics). Surfacing those rules through a typed TypeScript API turns RDFS into a directly-callable reasoning primitive for agents, with none of the closure-cost amplification of full OWL 2 DL.

**Downstream reuse.** Beyond OWL and SKOS, RDFS is consumed by `dcterms`, `foaf`, `schema.org` (JSON-LD context), `prov-o`, `void`, `dcat`, and dozens of other widely-deployed vocabularies. Every one of those vocabularies emits triples whose predicates are `rdfs:subClassOf`, `rdfs:domain`, `rdfs:range`, `rdfs:label`, `rdfs:comment`. A correct, well-typed `@amlhubs/rdfs` is therefore a force-multiplier — every downstream package the amlhubs org publishes that touches a registered vocabulary can import this metamodel and be guaranteed structural conformance with the W3C Recommendation.

## Scope

| Concern | Source | Coverage |
|---|---|---|
| RDFS classes | https://www.w3.org/TR/rdf-schema/ §2, §5 | `rdfs:Resource`, `rdfs:Class`, `rdfs:Literal`, `rdfs:Datatype`, `rdfs:Container`, `rdfs:ContainerMembershipProperty` |
| RDFS properties | https://www.w3.org/TR/rdf-schema/ §3, §5 | `rdfs:subClassOf`, `rdfs:subPropertyOf`, `rdfs:domain`, `rdfs:range`, `rdfs:label`, `rdfs:comment`, `rdfs:seeAlso`, `rdfs:isDefinedBy`, `rdfs:member` |
| Vocabulary serialization | https://www.w3.org/2000/01/rdf-schema | RDF/XML and Turtle namespace documents |
| Semantic closure | RDF 1.1 Semantics — W3C Rec 2014-02-25 | RDFS entailment rules (rdfs1–rdfs13) |
| Underlying triple model | `@amlhubs/rdf` (peerDependency) | IRI, BlankNode, Literal, Triple, Graph |
| Out of scope | — | OWL 2 axioms, SKOS concept schemes, SHACL constraints — these belong to dedicated downstream packages |

## References (W3C-only)

- RDF Schema 1.1 — https://www.w3.org/TR/rdf-schema/
- RDF 1.1 Semantics — https://www.w3.org/TR/rdf11-mt/
- RDF 1.1 Primer — https://www.w3.org/TR/rdf11-primer/
- RDFS namespace document — https://www.w3.org/2000/01/rdf-schema
- RDF namespace document — https://www.w3.org/1999/02/22-rdf-syntax-ns
