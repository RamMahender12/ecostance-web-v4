import { answerFromFaq } from "../src/content/site";

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(msg);
}

assert(answerFromFaq("What is a DPP?").toLowerCase().includes("passport"), "DPP match");
assert(answerFromFaq("wool sweater fashion").toLowerCase().includes("passport"), "fashion match");
assert(answerFromFaq("EUDR compliance").toLowerCase().includes("eudr"), "EUDR match");
assert(answerFromFaq("auditable immutable").toLowerCase().includes("trust"), "trust match");
assert(answerFromFaq("zzzz unknown xyz").includes("/contact"), "handoff");
console.log("chat faq ok");
