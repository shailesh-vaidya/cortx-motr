var conf =
[
    [ "Overview", "d2/dd9/conf.html#conf-ovw", null ],
    [ "Definitions", "d2/dd9/conf.html#conf-def", null ],
    [ "Requirements", "d2/dd9/conf.html#conf-req", null ],
    [ "Dependencies", "d2/dd9/conf.html#conf-depends", null ],
    [ "Design Highlights", "d2/dd9/conf.html#conf-highlights", null ],
    [ "Functional Specification", "d2/dd9/conf.html#conf-fspec", null ],
    [ "Logical Specification", "d2/dd9/conf.html#conf-lspec", [
      [ "Components Overview", "d2/dd9/conf.html#conf-lspec-comps", null ],
      [ "State Specification", "d2/dd9/conf.html#conf-lspec-state", null ],
      [ "Threading and Concurrency Model", "d2/dd9/conf.html#conf-lspec-thread", null ]
    ] ],
    [ "Conformance", "d2/dd9/conf.html#conf-conformance", null ],
    [ "Unit Tests", "d2/dd9/conf.html#conf-ut", [
      [ "Infrastructure Test Suite", "d2/dd9/conf.html#conf-ut-common", null ],
      [ "confc Test Suite", "d2/dd9/conf.html#conf-ut-confc", null ]
    ] ],
    [ "Scalability", "d2/dd9/conf.html#conf-scalability", null ],
    [ "References", "d2/dd9/conf.html#conf-ref", null ],
    [ "Configuration Objects", "d9/d5d/conf-fspec-obj.html", [
      [ "Data Structures", "d9/d5d/conf-fspec-obj.html#conf-fspec-obj-data", null ],
      [ "Enumerations", "d9/d5d/conf-fspec-obj.html#conf-fspec-obj-enum", [
        [ "Configuration Object Status", "d9/d5d/conf-fspec-obj.html#conf-fspec-obj-enum-status", null ]
      ] ],
      [ "Pinned Objects", "d9/d5d/conf-fspec-obj.html#conf-fspec-obj-pinned", null ],
      [ "Private Fields", "d9/d5d/conf-fspec-obj.html#conf-fspec-obj-private", null ]
    ] ],
    [ "Configuration Client (confc)", "dc/d31/confc-fspec.html", [
      [ "Data Structures", "dc/d31/confc-fspec.html#confc-fspec-data", null ],
      [ "Subroutines", "dc/d31/confc-fspec.html#confc-fspec-sub", [
        [ "Initialization and termination", "dc/d31/confc-fspec.html#confc-fspec-sub-setup", null ],
        [ "Accessing configuration objects", "dc/d31/confc-fspec.html#confc-fspec-sub-use", null ]
      ] ],
      [ "Recipes", "dc/d31/confc-fspec.html#confc-fspec-recipes", [
        [ "Get profile configuration", "dc/d31/confc-fspec.html#confc-fspec-recipe1", null ],
        [ "Iterate directory object asynchronously", "dc/d31/confc-fspec.html#confc-fspec-recipe2", null ]
      ] ]
    ] ],
    [ "Configuration Cache", "d1/dfb/conf-fspec-cache.html", [
      [ "Concurrency control", "d1/dfb/conf-fspec-cache.html#conf-fspec-cache-thread", null ]
    ] ],
    [ "Pre-Loading of Configuration Cache", "db/d23/conf-fspec-preload.html", [
      [ "Configuration string", "db/d23/conf-fspec-preload.html#conf-fspec-preload-string", [
        [ "Format", "db/d23/conf-fspec-preload.html#conf-fspec-preload-string-format", null ],
        [ "Examples", "db/d23/conf-fspec-preload.html#conf-fspec-preload-string-examples", null ]
      ] ]
    ] ],
    [ "Configuration Object Operations", "d3/d18/conf-fspec-objops.html", [
      [ "Data Structures", "d3/d18/conf-fspec-objops.html#conf-fspec-objops-data", null ],
      [ "Subroutines", "d3/d18/conf-fspec-objops.html#conf-fspec-objops-sub", null ]
    ] ],
    [ "Configuration Service (confd)", "d4/d41/confd-fspec.html", [
      [ "Data Structures", "d4/d41/confd-fspec.html#confd-fspec-data", null ],
      [ "Subroutines", "d4/d41/confd-fspec.html#confd-fspec-sub", [
        [ "Initialization and termination", "d4/d41/confd-fspec.html#confd-fspec-sub-setup", null ]
      ] ],
      [ "Command Usage", "d4/d41/confd-fspec.html#confd-fspec-cli", null ],
      [ "Recipes", "d4/d41/confd-fspec.html#confd-fspec-recipes", [
        [ "Typical interaction between confc and confd", "d4/d41/confd-fspec.html#confd-fspec-recipe1", null ]
      ] ]
    ] ],
    [ "Redundant Configuration Client (rconfc)", "dd/d2e/rconfc-fspec.html", [
      [ "Data Structures", "dd/d2e/rconfc-fspec.html#rconfc-fspec-data", null ],
      [ "Subroutines", "dd/d2e/rconfc-fspec.html#rconfc-fspec-sub", null ],
      [ "Initialisation, finalisation and reading data", "dd/d2e/rconfc-fspec.html#rconfc-fspec-routines", null ]
    ] ],
    [ "confc Internals", "d1/d89/confc-lspec.html", [
      [ "State Specification", "d1/d89/confc-lspec.html#confc-lspec-state", [
        [ "S_INITIAL", "d1/d89/confc-lspec.html#confc-lspec-state-initial", null ],
        [ "S_CHECK", "d1/d89/confc-lspec.html#confc-lspec-state-check", null ],
        [ "S_WAIT_REPLY", "d1/d89/confc-lspec.html#confc-lspec-state-wait-reply", null ],
        [ "S_WAIT_STATUS", "d1/d89/confc-lspec.html#confc-lspec-state-wait-status", null ],
        [ "S_SKIP_CONFD", "d1/d89/confc-lspec.html#confc-lspec-state-grow-cache", null ],
        [ "S_TERMINAL", "d1/d89/confc-lspec.html#confc-lspec-state-terminal", null ],
        [ "S_FAILURE", "d1/d89/confc-lspec.html#confc-lspec-state-failure", null ]
      ] ],
      [ "Walking the DAG", "d1/d89/confc-lspec.html#confc-lspec-walk", null ],
      [ "Growing the cache", "d1/d89/confc-lspec.html#confc-lspec-grow", null ],
      [ "Threading and Concurrency Model", "d1/d89/confc-lspec.html#confc-lspec-thread", null ]
    ] ],
    [ "rconfc Internals", "d5/d8f/rconfc-lspec.html", [
      [ "Rconfc state machine", "d5/d8f/rconfc-lspec.html#rconfc-lspec-sm", null ],
      [ "Request cluster entry point from HA", "d5/d8f/rconfc-lspec.html#rconfc-lspec-entrypoint", null ],
      [ "Read Lock Acquisition and Revocation", "d5/d8f/rconfc-lspec.html#rconfc-lspec-rlock", null ],
      [ "Version Election and Quorum", "d5/d8f/rconfc-lspec.html#rconfc-lspec-elect", null ],
      [ "Processing HA notifications", "d5/d8f/rconfc-lspec.html#rconfc-lspec-ha-notification", null ],
      [ "Gating confc operations", "d5/d8f/rconfc-lspec.html#rconfc-lspec-gate", [
        [ "Blocking confc context initialisation", "d5/d8f/rconfc-lspec.html#rconfc-lspec-gate-check", null ],
        [ "Cleaning confc cache data", "d5/d8f/rconfc-lspec.html#rconfc-lspec-gate-drain", null ],
        [ "Reconnecting confc to another confd", "d5/d8f/rconfc-lspec.html#rconfc-lspec-gate-skip", null ],
        [ "Cleaning configuration cache during stopping.", "d5/d8f/rconfc-lspec.html#rconfc-lspec-clean", null ]
      ] ]
    ] ],
    [ "confd Internals", "d0/dcc/confd-lspec-page.html", [
      [ "Dependencies", "d0/dcc/confd-lspec-page.html#confd-depends", null ],
      [ "Design Highlights", "d0/dcc/confd-lspec-page.html#confd-highlights", null ],
      [ "Logical Specification", "d0/dcc/confd-lspec-page.html#confd-lspec", null ],
      [ "State Specification", "d0/dcc/confd-lspec-page.html#confd-lspec-state", null ],
      [ "Locking model", "d0/dcc/confd-lspec-page.html#confd-lspec-long-lock", null ],
      [ "Threading and Concurrency Model", "d0/dcc/confd-lspec-page.html#confd-lspec-thread", [
        [ "NUMA Optimizations", "d0/dcc/confd-lspec-page.html#confd-lspec-numa", null ]
      ] ],
      [ "Conformance", "d0/dcc/confd-lspec-page.html#confd-conformance", null ],
      [ "Unit Tests", "d0/dcc/confd-lspec-page.html#confd-ut", null ],
      [ "Analysis", "d0/dcc/confd-lspec-page.html#confd-O", null ]
    ] ]
];