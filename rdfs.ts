// ═══════════════════════════════════════════════════════════════════════════
// @amlhubs/rdfs — RDF Schema 1.1 metamodel
//
// Specification : RDF Schema 1.1
// Status        : W3C Recommendation
// Date          : 25 February 2014
// URL           : https://www.w3.org/TR/rdf-schema/
// Editors       : Dan Brickley, R.V. Guha
// Namespace IRI : http://www.w3.org/2000/01/rdf-schema#
// Prefix        : rdfs:
//
// Companion specs cited as normative references by RDF Schema 1.1:
//   - RDF 1.1 Concepts and Abstract Syntax (W3C Rec 2014-02-25)
//   - RDF 1.1 Semantics                    (W3C Rec 2014-02-25)
//   - RDF 1.1 Primer                       (W3C WG Note 2014-06-24)
//
// Architectural ordering:
//   @amlhubs/rdf  upstream -> @amlhubs/rdfs  downstream
//
// This file is PURE RDFS. It depends on @amlhubs/rdf for the underlying
// IRI / Literal / Triple / Resource primitives that RDF Schema layers
// vocabulary-description semantics over (peerDependency).
//
// ─── RDFS classes (per https://www.w3.org/TR/rdf-schema/ §2 §3) ──────────────
//   rdfs:Resource                       (§2.1) — class of every RDF resource
//   rdfs:Class                          (§2.2) — class of RDF classes
//   rdfs:Literal                        (§2.3) — class of literal values
//   rdfs:Datatype                       (§2.4) — class of datatypes
//   rdfs:Container                      (§5.1) — superclass of rdf:Bag, rdf:Seq, rdf:Alt
//   rdfs:ContainerMembershipProperty    (§5.1.2) — class of rdf:_n properties
//
// ─── RDFS properties (per https://www.w3.org/TR/rdf-schema/ §3 §5) ───────────
//   rdfs:subClassOf      (§3.4) — class hierarchy edge
//   rdfs:subPropertyOf   (§3.5) — property hierarchy edge
//   rdfs:domain          (§3.2) — domain restriction on a property
//   rdfs:range           (§3.3) — range restriction on a property
//   rdfs:label           (§5.4.1) — human-readable name
//   rdfs:comment         (§5.4.2) — human-readable description
//   rdfs:seeAlso         (§5.4.3) — related-resource pointer
//   rdfs:isDefinedBy     (§5.4.4) — defining-resource pointer
//   rdfs:member          (§5.1.1) — superproperty of all rdf:_n
//
// This is a banner-only scaffold. Concrete TypeScript declarations
// (interfaces, classes, namespace accessors) will be added in a subsequent
// phase that mirrors the @amlhubs/uml extraction pattern.
// ═══════════════════════════════════════════════════════════════════════════

export {};
