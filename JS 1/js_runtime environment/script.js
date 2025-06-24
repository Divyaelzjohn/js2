/* javascript thread time envirinment */
/* setTime environment
   console
   ECMAScript
*/
/* js is not a machine */
/* js engine architecture 
-parsing
-compilation
-execution
*/
/* Parsing -
   code broke down into tokens
   syntax parser -
   syntax parser generate AST
   AST[Abstract syntax tree]
*/
/* compilation
   JIT[just in time] compilation   
   -interpretted - line by line execution
   adg--code is fast
   -compiler - compile first before executing
   program->optimized code->executed
   adg--more efficient
*/
/* javascript language can behave like innterpretted programming language as well as compiler  language
   everything is depended JS Engine
*/

/* Execution convert innterpretted programing language to machine code 
 AST goes into interpretter convert high level code to bite code an that code move to the execution step
 while it is doing so it takes the help of compiler to optimize the code
 the compiler basically talks to the interpretter and while the code is being interpretted line by line
 the compiler also basically tries to optimize the code as much as it can*/
/* execution is based on major 2 components of the javascript engine 
- memory heap --this is the place where all memory is stored 
- callstack
*/

/* garbage collector tries to free up the memory space when it possible*/
/* mark and sweep
   inlining 
   copy elisiam 
   inline catching
*/

/* v8 JS Engine
/* 
javascript souce code->parser->Abstract syntax tree->interpreter ignition->bytecode
interpreter ignition->compiler Turbofan->optimized machine code
*/
