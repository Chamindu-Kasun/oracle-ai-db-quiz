// Question bank: 80 questions. c = index of the correct option (0-3), e = explanation.
window.QUESTIONS = [
 {
  "id": "p1-1",
  "part": 1,
  "n": 1,
  "q": "In a property graph used for customer transactions, what does an edge represent?",
  "o": [
   "A label used to group similar vertices",
   "A rule that controls graph query privileges",
   "A set of properties shared by every graph",
   "A relationship or interaction between entities"
  ],
  "c": 3,
  "e": "A property graph has two building blocks: vertices (the entities, e.g. customers, accounts, merchants) and edges (the connections between them, e.g. 'customer PAID merchant'). So in a transaction graph, each edge is the relationship or interaction. Labels group vertices/edges, privileges are security, and properties are attributes – none of these is what an edge is. Remember: Vertex = noun (thing), Edge = verb (connection)."
 },
 {
  "id": "p1-2",
  "part": 1,
  "n": 2,
  "q": "A media catalog contains millions of image embeddings. The application must return similar images quickly, and the team can accept a small recall trade-off. Which approach supports this requirement?",
  "o": [
   "Use only exact full scans for every image search.",
   "Replace image embeddings with JSON field names.",
   "Create an approximate vector index for similarity search.",
   "Model each image as a graph edge before searching."
  ],
  "c": 2,
  "e": "Comparing a query vector with millions of stored vectors one by one (exact search) is accurate but slow. An approximate vector index (HNSW or IVF in Oracle) narrows the search so results come back very quickly, at the cost of a tiny loss in recall (it may occasionally miss one of the true nearest neighbours). Because the team accepts that trade-off, an approximate index is the right choice. JSON field names and graph edges have nothing to do with similarity search."
 },
 {
  "id": "p1-3",
  "part": 1,
  "n": 3,
  "q": "A support application converts each knowledge-base article into a numeric representation so that articles with similar meanings can be found even when they use different words. What is this numeric representation used for?",
  "o": [
   "Capturing semantic meaning for similarity comparison.",
   "Scheduling database maintenance windows.",
   "Defining graph privileges for connected-data queries.",
   "Enforcing JSON document schema validation."
  ],
  "c": 0,
  "e": "This numeric representation is a vector embedding. An embedding model turns text (or images, audio) into a list of numbers so that items with similar MEANING end up close together, even if the words are different (e.g. 'reset password' and 'forgot my login'). That is the whole basis of semantic similarity search. Maintenance windows, graph privileges and JSON schema validation are unrelated database features."
 },
 {
  "id": "p1-4",
  "part": 1,
  "n": 4,
  "q": "A project group has prepared its datasets and now wants to analyze them, share results, and collaborate without leaving the database tool environment. Which choice aligns with that need?",
  "o": [
   "Use Graph Studio only to model and analyze connected data.",
   "Use SQL Worksheet only to run individual SQL statements.",
   "Use Database Users only to manage account access.",
   "Use Data Studio for data analysis, sharing, and collaboration tasks."
  ],
  "c": 3,
  "e": "In Database Actions, Data Studio is the workspace for the data lifecycle: discover, load, transform/prepare, analyze, share and collaborate. Graph Studio is only for graph work, SQL Worksheet only runs individual statements, and Database Users only manages accounts. The keywords 'analyze, share, collaborate' point to Data Studio."
 },
 {
  "id": "p1-5",
  "part": 1,
  "n": 5,
  "q": "A support chatbot must answer troubleshooting questions using a curated set of product manuals. What role does AI Vector Search play in this design?",
  "o": [
   "It publishes the chatbot before any source content is connected.",
   "It finds manual sections that are semantically related to the user's question.",
   "It replaces the manuals with database backup records.",
   "It uses graph community detection to generate the final answer."
  ],
  "c": 1,
  "e": "This is a RAG (Retrieval-Augmented Generation) design. AI Vector Search is the 'retrieval' step: it converts the user's question into a vector and finds the manual sections whose vectors are closest in meaning. Those sections are then given to the LLM so the answer is grounded in approved content. It does not publish chatbots, replace manuals with backups, or generate answers through graph community detection."
 },
 {
  "id": "p1-6",
  "part": 1,
  "n": 6,
  "q": "A finance manager wants to ask business questions in plain language without writing SQL or learning the schema first. What capability addresses this need?",
  "o": [
   "Property Graph Views convert every table automatically into a graph model.",
   "Select AI lets users ask natural-language questions to get data answers.",
   "Data Studio replaces SQL with spreadsheet-only analysis.",
   "APEX generates vector indexes from text prompts."
  ],
  "c": 1,
  "e": "Select AI lets users ask questions in plain natural language (e.g. 'What were total sales by region last quarter?'). Behind the scenes it uses an LLM plus the schema metadata to generate the SQL, runs it, and returns the answer – so the user needs no SQL or schema knowledge. Property Graph Views, Data Studio and APEX do not provide natural-language-to-data querying."
 },
 {
  "id": "p1-7",
  "part": 1,
  "n": 7,
  "q": "A project team is provisioning an Autonomous AI Database Serverless instance for a small application and wants Oracle to manage the underlying infrastructure. Which settings do they primarily choose during creation?",
  "o": [
   "Manual operating-system patch windows and host names",
   "Graph model definitions and edge-label mappings",
   "ECPU count and storage size",
   "APEX page themes and REST module templates"
  ],
  "c": 2,
  "e": "When you create an Autonomous AI Database Serverless instance, the main sizing decisions are compute (ECPU count) and storage size, plus options like auto-scaling. Oracle handles the OS, patching, hosts and infrastructure, so you never choose patch windows or host names. Graph models and APEX themes are things you build later inside the database, not provisioning settings."
 },
 {
  "id": "p1-8",
  "part": 1,
  "n": 8,
  "q": "A department wants to create internal workflow applications without building every page and data interaction from scratch. Why would Oracle APEX fit this need?",
  "o": [
   "It provides a low-code development environment for building database-backed applications.",
   "It replaces application development with graph community detection.",
   "It converts application screens into vector indexes for similarity search.",
   "It is used primarily to configure encryption keys for Autonomous AI Database."
  ],
  "c": 0,
  "e": "Oracle APEX is a low-code development platform that runs inside the Oracle Database. It provides wizards and ready-made components (forms, reports, charts, workflows) so teams build data-driven apps quickly without hand-coding every page. It is not a graph tool, vector index tool, or key-management service."
 },
 {
  "id": "p1-9",
  "part": 1,
  "n": 9,
  "q": "A travel platform stores hotel descriptions, nightly rates, and city data in the database. A customer enters a free-text request for a “quiet beach hotel for families,” but results must stay under a budget and within one destination city. Which design should the platform use?",
  "o": [
   "Run only keyword matching, then ignore the budget requirement.",
   "Use one SQL query that combines semantic similarity with price and city filters.",
   "Use graph analytics because vector search cannot work with business predicates.",
   "Export all hotel descriptions to a separate service and remove relational filtering."
  ],
  "c": 1,
  "e": "Oracle AI Database lets you mix vector search and normal SQL in ONE query, e.g. WHERE price < :budget AND city = :city ORDER BY VECTOR_DISTANCE(description_vec, :query_vec) FETCH FIRST 10 ROWS ONLY. The vector part finds 'quiet beach hotel for families' by meaning, and the SQL filters enforce budget and city. Ignoring the budget, exporting data to another service, or claiming vector search can't use business filters are all wrong."
 },
 {
  "id": "p1-10",
  "part": 1,
  "n": 10,
  "q": "A recommendation query ranks stored product-description vectors by distance from a shopper's request vector. How should the application interpret lower-ranked distance values?",
  "o": [
   "The vectors must be graph vertices before comparison is valid.",
   "The search is less relevant because lower distance means lower semantic similarity.",
   "The product descriptions are closer in meaning to the shopper's request.",
   "The products require a different JSON schema before they can be searched."
  ],
  "c": 2,
  "e": "Vector distance measures how far apart two vectors are. Smaller distance = more similar meaning; larger distance = less similar. So items with the lowest distance values (top of an ascending sort) are the closest matches to the shopper's request. No graph or JSON schema change is needed to interpret distance."
 },
 {
  "id": "p1-11",
  "part": 1,
  "n": 11,
  "q": "A development team wants a data format that is easy for people to read, easy for services to exchange, and flexible enough to represent nested application data. How does JSON support this requirement?",
  "o": [
   "It requires every document to use the same fixed relational schema.",
   "It stores only scalar values and requires nested data to be kept in separate files.",
   "It maps well to application objects and supports nested content.",
   "It is designed only for relationship traversal between connected entities."
  ],
  "c": 2,
  "e": "JSON is human-readable, easy to exchange between services (common in REST APIs), and naturally represents nested structures – objects inside objects and arrays. It maps directly to objects in application code (JavaScript, Java, Python). It does NOT require a fixed relational schema, it is not limited to scalar values, and it is not a graph-traversal format."
 },
 {
  "id": "p1-12",
  "part": 1,
  "n": 12,
  "q": "A team wants to build secure enterprise applications quickly without needing deep expertise in many web technologies. How is Oracle APEX positioned for this need?",
  "o": [
   "As a graph-only environment for relationship analysis and path discovery.",
   "As a key-management service for database encryption lifecycle control.",
   "As a JSON storage format used to optimize document persistence.",
   "As Oracle's low-code platform for building scalable and secure enterprise apps."
  ],
  "c": 3,
  "e": "Oracle positions APEX as its low-code platform for building scalable, secure enterprise applications. Developers need little expertise in many web technologies because APEX generates the UI and handles security, sessions and data access. It is not a graph environment, a key-management service, or a JSON storage format."
 },
 {
  "id": "p1-13",
  "part": 1,
  "n": 13,
  "q": "Which example represents an AI use case rather than a routine database administration task?",
  "o": [
   "Predicting product demand from historical sales patterns.",
   "Creating a private endpoint for database access",
   "Listing database users with expired passwords",
   "Scheduling a quarterly patch window"
  ],
  "c": 0,
  "e": "An AI use case uses data and algorithms to perform a task that normally needs human judgment – such as learning from historical sales to forecast future demand (machine learning prediction). Creating private endpoints, listing users with expired passwords, and scheduling patches are routine administration tasks, not AI."
 },
 {
  "id": "p1-14",
  "part": 1,
  "n": 14,
  "q": "A database team creates a vector index for product recommendations. The embedding model documentation recommends a specific distance metric for comparing its vectors. What should the team do when configuring similarity search?",
  "o": [
   "Use graph traversal distance instead of vector distance.",
   "Choose the metric based only on the table's row count.",
   "Use JSON document size as the similarity score.",
   "Use the distance metric that matches the embedding model's recommendation."
  ],
  "c": 3,
  "e": "Each embedding model is trained with a particular distance metric in mind (e.g. COSINE, EUCLIDEAN, DOT product). Using the metric the model recommends gives the most meaningful similarity results. Row count, graph traversal distance, and JSON document size have nothing to do with semantic similarity."
 },
 {
  "id": "p1-15",
  "part": 1,
  "n": 15,
  "q": "A developer wants to keep vector values in the database alongside relational data. Which Oracle feature supports this directly?",
  "o": [
   "A Property Graph View",
   "A JSON collection table",
   "A Data Studio catalog connection",
   "The Oracle VECTOR data type"
  ],
  "c": 3,
  "e": "Oracle AI Database (23ai/26ai) introduced the native VECTOR data type, e.g. CREATE TABLE docs (id NUMBER, text CLOB, emb VECTOR). This lets vectors live in the same table as relational data, so you can query both together. Property Graph Views, JSON collection tables and Data Studio catalog connections do not store vectors."
 },
 {
  "id": "p1-16",
  "part": 1,
  "n": 16,
  "q": "A developer wants a schema-flexible collection model in Oracle AI Database where each document is stored in one JSON column. Which Oracle feature matches that description?",
  "o": [
   "Relational external table",
   "Property Graph View",
   "JSON Duality View",
   "JSON collection table"
  ],
  "c": 3,
  "e": "A JSON collection table is a table designed to store JSON documents, where each document sits in a single JSON-type column – similar to a MongoDB collection. It is schema-flexible: documents can have different fields. A JSON Duality View exposes RELATIONAL tables as JSON (different thing), a Property Graph View is for graphs, and an external table points at outside files."
 },
 {
  "id": "p1-17",
  "part": 1,
  "n": 17,
  "q": "A GenAI application must answer questions using approved internal content. The team has already stored embeddings for document chunks in Oracle AI Database. What is the next retrieval step before generation?",
  "o": [
   "Compare the question embedding to stored vectors and retrieve relevant chunks.",
   "Use patch history as the grounding context.",
   "Replace the stored chunks with graph edge labels.",
   "Generate an answer before checking internal content."
  ],
  "c": 0,
  "e": "RAG order: (1) store chunk embeddings (already done), (2) RETRIEVE – turn the user's question into an embedding, compare it with stored vectors, and pull back the most relevant chunks, (3) GENERATE – give those chunks to the LLM as context. Generating before retrieving defeats the purpose; patch history and graph labels are not grounding content."
 },
 {
  "id": "p1-18",
  "part": 1,
  "n": 18,
  "q": "A social platform wants to identify users who have unusually strong influence based on their connections with other users. Which graph analytics task supports this goal?",
  "o": [
   "Finding semantically similar paragraphs with vector distance.",
   "Isolating database traffic with a private endpoint.",
   "Validating JSON document fields against a schema.",
   "Ranking important vertices based on relationship patterns."
  ],
  "c": 3,
  "e": "Finding influential users is a graph analytics problem. Algorithms such as PageRank (or other centrality measures) score vertices based on how many – and how important – their connections are. Vector distance finds similar text, private endpoints handle networking, and JSON validation checks document structure; none analyze relationships."
 },
 {
  "id": "p1-19",
  "part": 1,
  "n": 19,
  "q": "An IT manager wants to reduce the number of separate tools and operational processes used to support application data. How can a converged database support this goal?",
  "o": [
   "By requiring each workload to use a separate administration model.",
   "By keeping each data model in a different specialized engine.",
   "By supporting multiple workloads in one platform with a more unified operational model.",
   "By supporting only transactional workloads and excluding modern data types."
  ],
  "c": 2,
  "e": "A converged database supports many data types and workloads (relational, JSON, graph, spatial, vector, etc.) in a single database engine. That means one set of tools, one security model, one backup and patching process – fewer moving parts to operate. The wrong options all describe the opposite: separate engines, separate admin models, or no modern data types."
 },
 {
  "id": "p1-20",
  "part": 1,
  "n": 20,
  "q": "A data analyst is starting a new project and needs to bring data into the database tool environment, profile it, and prepare it for later analysis. Which workspace should the analyst use?",
  "o": [
   "Private Endpoint configuration",
   "Database Users",
   "Data Studio",
   "REST Workshop"
  ],
  "c": 2,
  "e": "Bringing data in, profiling it and preparing it are Data Studio tasks (Data Load, Catalog, Data Transforms, Data Insights). Private Endpoint is a network setting, Database Users is for account management, and REST Workshop is for creating REST APIs."
 },
 {
  "id": "p1-21",
  "part": 1,
  "n": 21,
  "q": "A team stores operational data in relational tables but wants applications to work with that same data as JSON documents without copying it to another database. Which Oracle capability supports this?",
  "o": [
   "Property graph algorithms",
   "JSON collection tables",
   "Property Graph Views",
   "JSON Duality Views"
  ],
  "c": 3,
  "e": "JSON Relational Duality Views let applications read and write data as JSON documents while the data is actually stored in normalized relational tables – there is only ONE copy. Updates through the JSON document go into the tables, and vice-versa. JSON collection tables store documents directly (not relational), and Property Graph Views/algorithms are for graph analysis."
 },
 {
  "id": "p1-22",
  "part": 1,
  "n": 22,
  "q": "A team stores JSON documents in Oracle AI Database and wants efficient database-native storage for those documents. Which JSON storage concept supports this requirement?",
  "o": [
   "PageRank, an algorithm for ranking graph vertices.",
   "OSON, an optimized binary representation for JSON.",
   "Early maintenance, a patch scheduling option.",
   "Private endpoint access, a network isolation option."
  ],
  "c": 1,
  "e": "OSON is Oracle's optimized binary format for storing JSON inside the database. Because it is binary and pre-parsed, the database can jump straight to fields without re-reading the text, making queries and updates faster and storage efficient. PageRank is a graph algorithm, Early maintenance is a patching option, and private endpoint is networking."
 },
 {
  "id": "p1-23",
  "part": 1,
  "n": 23,
  "q": "A team is choosing between Autonomous AI Database offerings. Their application stores mostly document-style data, but they also want the option to use Oracle Database capabilities as the application grows. Which offering should they evaluate first?",
  "o": [
   "Autonomous AI Lakehouse",
   "Autonomous JSON Database",
   "Autonomous AI Database Dedicated",
   "Oracle APEX Application Development"
  ],
  "c": 1,
  "e": "Autonomous AI JSON Database is the offering built for document-centric (JSON) applications and supports MongoDB-compatible APIs, while still giving full Oracle Database features (SQL, transactions) so the app can grow. Lakehouse is for analytics/warehousing, Dedicated is a deployment model, and APEX is an app development service."
 },
 {
  "id": "p1-24",
  "part": 1,
  "n": 24,
  "q": "An insurance company wants one data platform where claim notes can be searched by meaning while policy status and region filters remain consistent with relational data. Which capability supports this requirement?",
  "o": [
   "Searching only unstructured documents without applying SQL filters",
   "Combining semantic search with structured business data in the same database",
   "Converting claim notes into graph edges before semantic search",
   "Copying relational data into a separate vector-only platform before filtering"
  ],
  "c": 1,
  "e": "Oracle AI Vector Search is part of the converged database, so semantic search over claim notes and SQL filters on policy status/region run in the same database and even the same query. Data stays consistent because there's no copying. Searching without SQL filters, converting notes to graph edges, or moving data to a separate vector-only store all break the requirement."
 },
 {
  "id": "p1-25",
  "part": 1,
  "n": 25,
  "q": "A customer-support team wants to create a no-code agent that answers product questions from approved support articles. The team must verify response quality before the agent is released. Which Agent Factory path fits this requirement?",
  "o": [
   "Publish the agent first and connect support articles after users report gaps.",
   "Connect the support-article source, test the agent responses, and publish the agent after validation.",
   "Build a vector index only and skip agent testing.",
   "Use APEX page design tools instead of configuring an agent."
  ],
  "c": 1,
  "e": "With Agent Factory (no-code AI agents), the correct flow is: connect the data source (approved support articles) → test/validate the agent's responses → publish to users. Publishing before connecting content or skipping testing risks wrong answers, and APEX page design is not how you configure an agent."
 },
 {
  "id": "p1-26",
  "part": 1,
  "n": 26,
  "q": "A regulated team must control encryption key lifecycle actions under its own compliance process and wants patch visibility before the standard production schedule. Which configuration meets both needs?",
  "o": [
   "Oracle-managed keys and Regular maintenance",
   "Customer-managed keys in OCI Vault and Early maintenance",
   "Oracle-managed keys and Early maintenance",
   "Customer-managed keys in OCI Vault and no maintenance notifications"
  ],
  "c": 1,
  "e": "Two needs, two settings: (1) controlling encryption key lifecycle (create, rotate, disable) under your own compliance process = customer-managed keys stored in OCI Vault; (2) seeing patches before the standard production schedule = Early maintenance (patches arrive about a week before Regular). Oracle-managed keys fail need 1; 'no notifications' or Regular fail need 2."
 },
 {
  "id": "p1-27",
  "part": 1,
  "n": 27,
  "q": "A developer wants to use Database Actions for application and data work. Which task is commonly supported from this environment?",
  "o": [
   "Approving AWS Marketplace private offers.",
   "Creating OCI load balancers and VCN route tables.",
   "Opening tools for SQL development, REST enablement, JSON work, APEX, and machine learning.",
   "Managing operating-system storage zoning on database hosts."
  ],
  "c": 2,
  "e": "Database Actions (formerly SQL Developer Web) is the browser-based launchpad of Autonomous AI Database. From it you open SQL Worksheet, REST (ORDS) enablement, JSON tools, APEX, Data Studio, Graph Studio and Oracle Machine Learning. Load balancers, VCN routes, AWS Marketplace offers and OS storage are outside the database – Autonomous manages the OS for you."
 },
 {
  "id": "p1-28",
  "part": 1,
  "n": 28,
  "q": "A software team wants to add document-style APIs and vector similarity search to an existing application while continuing to use relational transactions. How does Oracle AI Database 26ai support this direction?",
  "o": [
   "It requires the team to move each workload to a separate purpose-built database.",
   "It supports relational, document, graph, spatial, and vector capabilities in one database architecture.",
   "It replaces SQL access with a separate document-only application layer.",
   "It allows AI features only after relational tables are exported to an external vector store."
  ],
  "c": 1,
  "e": "Oracle AI Database 26ai is a converged database: it supports relational, JSON/document, graph, spatial and vector capabilities in one database architecture. So the team can add document-style APIs and vector search to the existing app while keeping relational transactions – no need to move workloads to separate databases or external vector stores."
 },
 {
  "id": "p1-29",
  "part": 1,
  "n": 29,
  "q": "A team is selecting an Autonomous AI Database deployment model. They want the lowest operational setup effort for a variable workload. Which deployment model should they evaluate first?",
  "o": [
   "Dedicated, because it is the only deployment model that supports SQL workloads.",
   "Serverless, because it provides elastic capacity with minimal infrastructure setup.",
   "Dedicated, because it always removes the need to plan capacity.",
   "Serverless, because it provides customer-isolated Exadata infrastructure by default."
  ],
  "c": 1,
  "e": "Autonomous AI Database has two deployment models. Serverless: Oracle manages everything on shared infrastructure, quick to create, elastic (auto-scaling) – best for low setup effort and variable workloads. Dedicated: your own isolated Exadata infrastructure for more control/isolation, but more planning. Both support SQL, and Serverless does NOT give customer-isolated Exadata."
 },
 {
  "id": "p1-30",
  "part": 1,
  "n": 30,
  "q": "A developer signs in to Autonomous AI Database and wants one place to open built-in tools and related workspaces. What is Database Actions in this context?",
  "o": [
   "A vector-index setting used for approximate similarity search.",
   "A graph-analysis engine that replaces SQL development.",
   "A network feature used to isolate database endpoints.",
   "A central access point for built-in database tools and workspaces."
  ],
  "c": 3,
  "e": "Database Actions is the central web entry point for the built-in tools and workspaces of Autonomous AI Database (SQL, Data Studio, APEX, REST, JSON, Graph, ML, administration). It is not a vector index setting, a graph engine, or a networking feature."
 },
 {
  "id": "p1-31",
  "part": 1,
  "n": 31,
  "q": "Which description matches self-driving in Autonomous AI Database?",
  "o": [
   "Routine database and infrastructure management tasks are automated.",
   "Monitoring and availability controls are unnecessary after provisioning.",
   "Elasticity is maintained through customer-managed operating-system scripts.",
   "Application teams manually tune, patch, and scale the database."
  ],
  "c": 0,
  "e": "Autonomous AI Database is described as self-driving, self-securing and self-repairing. Self-driving means routine database and infrastructure management – provisioning, tuning, scaling, patching, backups, monitoring – is automated. Monitoring is still needed (Oracle does it), elasticity is not done via customer OS scripts, and app teams do not manually tune/patch."
 },
 {
  "id": "p1-32",
  "part": 1,
  "n": 32,
  "q": "A telecommunications company wants to analyze how devices, phone numbers, and accounts are connected so investigators can detect suspicious clusters of related activity. Which modeling approach should they use?",
  "o": [
   "Use a private endpoint setting to rank suspicious accounts.",
   "Keep only monthly totals for each account and remove connection details.",
   "Represent entities as graph vertices and interactions as graph edges.",
   "Store all interactions as unrelated text notes and search only by exact keywords."
  ],
  "c": 2,
  "e": "Detecting suspicious clusters of connected devices, phone numbers and accounts is a connected-data problem, so model it as a graph: entities = vertices, interactions = edges. Graph queries and algorithms (community detection, path finding) can then reveal hidden rings. Monthly totals or plain text notes lose the connections, and a private endpoint is only network access."
 },
 {
  "id": "p1-33",
  "part": 1,
  "n": 33,
  "q": "A logistics team stores shipment, warehouse, and carrier data in relational tables. They want to analyze route relationships while continuing to use the operational tables as the source of truth. Which capability should they use?",
  "o": [
   "Nightly exports to a graph-only database before each analysis.",
   "JSON collection tables that remove the relational source model.",
   "Vector distance functions on warehouse identifiers.",
   "Property Graph Views that define graph structures over existing relational data."
  ],
  "c": 3,
  "e": "Property Graph Views (SQL/PGQ, CREATE PROPERTY GRAPH) define a graph on top of existing relational tables – tables become vertices and foreign-key relationships become edges – without copying data. The operational tables remain the single source of truth. Nightly exports create stale copies, JSON collections remove the relational model, and vector distance doesn't model routes."
 },
 {
  "id": "p1-34",
  "part": 1,
  "n": 34,
  "q": "A company uses one database for transactions, another for JSON documents, and a separate vector store for semantic search. The analytics team must combine customer status, document content, and similarity ranking in one application workflow. What operational issue can this create?",
  "o": [
   "It allows all data changes to be synchronized without additional design.",
   "It guarantees that every platform uses the same governance policy.",
   "It can require integration work to coordinate data, security and query results.",
   "It removes the need to manage access controls for each platform."
  ],
  "c": 2,
  "e": "Using separate databases for transactions, JSON and vectors (polyglot persistence) means the application must move and sync data between systems, apply security on each, and merge query results itself. This adds integration work, latency and risk of inconsistency. The other options claim automatic sync, identical governance, or no access controls – all false."
 },
 {
  "id": "p1-35",
  "part": 1,
  "n": 35,
  "q": "A product team adds a feature that learns from historical support tickets to classify new incoming requests. Which concept does this example illustrate?",
  "o": [
   "Private endpoint access for network isolation.",
   "JSON binary storage for document persistence.",
   "Database patch automation for routine maintenance.",
   "Artificial intelligence applied to a classification task."
  ],
  "c": 3,
  "e": "Learning from historical tickets to classify new ones is a classic AI / machine learning classification task: the system learns patterns from labelled data and predicts a category for new data. Private endpoints, JSON binary storage and patch automation are infrastructure features, not AI."
 },
 {
  "id": "p1-36",
  "part": 1,
  "n": 36,
  "q": "A developer needs embeddings for product descriptions that will be searched with AI Vector Search inside Oracle AI Database 26ai. Which database-native approach supports this task?",
  "o": [
   "Convert each product description into a graph edge label.",
   "Generate vectors with an Oracle AI Database vectorization function.",
   "Use a maintenance schedule to assign embedding dimensions.",
   "Create a private endpoint for each product category."
  ],
  "c": 1,
  "e": "Oracle AI Database 26ai can generate embeddings inside the database, e.g. using VECTOR_EMBEDDING() with an imported ONNX model or the DBMS_VECTOR / DBMS_VECTOR_CHAIN packages (UTL_TO_EMBEDDING). This keeps the whole pipeline in the database. Graph edge labels, maintenance schedules and private endpoints do not create vectors."
 },
 {
  "id": "p1-37",
  "part": 1,
  "n": 37,
  "q": "A database must be reachable only from workloads running in a controlled OCI virtual cloud network. The team does not want a public database endpoint. Which provisioning choice supports this requirement?",
  "o": [
   "Use a public endpoint with no access control list.",
   "Select a maintenance schedule before configuring network access.",
   "Allow access from everywhere and rely only on database passwords.",
   "Configure a private endpoint for the database."
  ],
  "c": 3,
  "e": "A private endpoint gives the database a private IP inside your OCI VCN subnet, so it is only reachable from inside that private network – no public endpoint. A public endpoint without ACL or 'access from everywhere' exposes the database to the internet, and a maintenance schedule has nothing to do with network isolation."
 },
 {
  "id": "p1-38",
  "part": 1,
  "n": 38,
  "q": "An analyst asks a natural-language question through Select AI and wants the application to show the generated query for review. Which Select AI behavior supports this need?",
  "o": [
   "It schedules a maintenance recommendation after each prompt.",
   "It can return generated SQL as part of the response behavior.",
   "It creates a JSON collection table before answering.",
   "It automatically creates a graph visualization for every question."
  ],
  "c": 1,
  "e": "Select AI supports several actions: runsql (default – runs the query and returns results), showsql (shows the generated SQL), explainsql (explains the SQL), narrate (answer in natural language) and chat. To review the query, use the showsql behaviour, e.g. SELECT AI showsql how many customers are in Colombo. It doesn't schedule maintenance, create JSON tables or draw graphs."
 },
 {
  "id": "p1-39",
  "part": 1,
  "n": 39,
  "q": "A team is tuning a semantic product-search query. The query already combines a vector-distance ranking with SQL predicates for inventory and region. What should the team check when validating the design?",
  "o": [
   "That maintenance scheduling determines which products are semantically similar.",
   "That the SQL filters limit eligible rows while vector distance ranks semantic similarity.",
   "That the vector values are converted into graph edges before ranking.",
   "That all SQL filters are removed before vector search can run."
  ],
  "c": 1,
  "e": "In a hybrid semantic search query, SQL WHERE predicates (inventory, region) decide WHICH rows are eligible, and ORDER BY VECTOR_DISTANCE decides HOW they rank by meaning. When validating, confirm both parts do their job. Removing filters breaks business rules; vectors don't become graph edges; maintenance has nothing to do with similarity."
 },
 {
  "id": "p1-40",
  "part": 1,
  "n": 40,
  "q": "A user working in Database Actions wants a workspace for discovering, loading, preparing, analyzing, and sharing data. Which workspace supports these broader data-oriented tasks?",
  "o": [
   "SQL Worksheet",
   "Graph Studio",
   "Data Studio",
   "REST Workshop"
  ],
  "c": 2,
  "e": "Data Studio is the Database Actions workspace for broader data tasks: discover (Catalog), load (Data Load), prepare (Data Transforms), analyze (Data Analysis/Insights) and share (Data Share). SQL Worksheet runs SQL, Graph Studio is for graphs, REST Workshop is for REST APIs."
 },
 {
  "id": "p2-1",
  "part": 2,
  "n": 1,
  "q": "You just provisioned a Serverless database and need to confirm when application teams can begin connecting to it. When is the database ready for connections?",
  "o": [
   "When a Data Studio project is created for the database",
   "When the instance shows Available after provisioning",
   "When a JSON collection table is loaded into the database",
   "When the Create button is selected in the console"
  ],
  "c": 1,
  "e": "After you click Create, the instance goes through the Provisioning state (shown in orange). When the lifecycle state changes to Available (green), the database is up and applications can connect (after downloading the wallet or using the connection strings). Clicking Create only starts the process, and creating a Data Studio project or loading a JSON table are things you do AFTER it is available."
 },
 {
  "id": "p2-2",
  "part": 2,
  "n": 2,
  "q": "A team must deploy an Oracle Autonomous AI Database Serverless instance so that database access is available only inside a private OCI network. Which access setting should they use?",
  "o": [
   "Secure access from everywhere",
   "Public endpoint access limited by an access control list",
   "Private endpoint access only",
   "Secure access from allowed IPs and VCNs only"
  ],
  "c": 2,
  "e": "In the network access options when provisioning, 'Private endpoint access only' places the database in a subnet of your VCN with a private IP, so it can be reached only from inside the private OCI network. 'Secure access from everywhere' and 'allowed IPs and VCNs only' both still use a public endpoint (ACLs just restrict who can use it), so they do not meet 'only inside a private network'."
 },
 {
  "id": "p2-3",
  "part": 2,
  "n": 3,
  "q": "A development team needs an Autonomous AI Database deployment that starts small, minimizes setup effort, and can scale online as usage grows. Which deployment choice fits this requirement?",
  "o": [
   "A fixed-capacity deployment option, because it maintains consistent performance without scaling",
   "Dedicated, because it allows full control over infrastructure configuration and capacity planning",
   "Serverless, because it is designed for simple deployment and elastic scaling",
   "Dedicated, because it requires capacity to be provisioned and scaled by administrators"
  ],
  "c": 2,
  "e": "Serverless is the easiest Autonomous deployment: create it in minutes, start with a small ECPU/storage size, and scale online (manually or with auto-scaling) with no downtime as usage grows. Dedicated is for customers who want isolated Exadata infrastructure and more control, which means more planning. A fixed-capacity option goes against 'scale as usage grows'."
 },
 {
  "id": "p2-4",
  "part": 2,
  "n": 4,
  "q": "When comparing a query vector with stored vectors, what does a smaller vector distance indicate?",
  "o": [
   "The stored vectors were created with different models.",
   "The query must switch from SQL to GraphQL.",
   "The items are more semantically similar.",
   "The items require a larger maintenance window."
  ],
  "c": 2,
  "e": "Vector distance measures how far apart two embeddings are. The smaller the distance, the closer the meanings – so a small distance means the stored item is a good semantic match for the query. Distance does not mean the vectors came from different models (you should always use the same model), and it has nothing to do with GraphQL or maintenance windows."
 },
 {
  "id": "p2-5",
  "part": 2,
  "n": 5,
  "q": "A vector index will not fit entirely in memory. Which index organization option should be considered for use?",
  "o": [
   "NEIGHBOR PARTITIONS",
   "TARGET ACCURACY",
   "INMEMORY NEIGHBOR GRAPH",
   "EXACT SEARCH ONLY"
  ],
  "c": 0,
  "e": "Oracle has two main vector index organizations: INMEMORY NEIGHBOR GRAPH (HNSW) – very fast but must fit in the Vector Memory Pool in memory; and NEIGHBOR PARTITIONS (IVF – Inverted File Flat) – stores vectors in partitions (clusters) on disk, so it suits very large indexes that won't fit in memory. TARGET ACCURACY is a quality setting, not an organization, and exact search uses no index."
 },
 {
  "id": "p2-6",
  "part": 2,
  "n": 6,
  "q": "A team sets TARGET ACCURACY on a vector index. What does this setting control?",
  "o": [
   "The maintenance schedule for rebuilding the index",
   "The default quality level for approximate similarity search results",
   "The number of dimensions stored in each vector",
   "The SQL privileges required to query the index"
  ],
  "c": 1,
  "e": "TARGET ACCURACY (a percentage, e.g. 90 or 95) tells the vector index how accurate approximate search should be by default – higher accuracy finds more of the true nearest neighbours but takes slightly longer. It can also be overridden in a query (APPROX ... WITH TARGET ACCURACY 95). It does not control rebuild schedules, vector dimensions or SQL privileges."
 },
 {
  "id": "p2-7",
  "part": 2,
  "n": 7,
  "q": "A team already uses Database Actions and now needs the part of the environment focused on discovery, load, integration, and data preparation. Which workspace should they open?",
  "o": [
   "Data Studio",
   "Database Users",
   "SQL Worksheet",
   "Graph Studio"
  ],
  "c": 0,
  "e": "Discovery, load, integration (link/feed external data) and data preparation (transforms) are all features of Data Studio inside Database Actions. Database Users manages accounts, SQL Worksheet is for writing SQL, and Graph Studio is for property graph modelling and analysis."
 },
 {
  "id": "p2-8",
  "part": 2,
  "n": 8,
  "q": "A project team wants a built-in workspace to analyze data assets and support sharing or collaboration after preparation work is complete. Which choice fits that requirement?",
  "o": [
   "Private Endpoint configuration for network access",
   "Database Users for account administration",
   "SQL Worksheet for individual query execution",
   "Data Studio"
  ],
  "c": 3,
  "e": "Once data is prepared, Data Studio also supports analysis (Data Analysis, Data Insights) and sharing/collaboration (Data Share). The other options are a network setting, user administration, and a single-query SQL tool – none provide analysis plus sharing."
 },
 {
  "id": "p2-9",
  "part": 2,
  "n": 9,
  "q": "Which task is a common use of graph analytics?",
  "o": [
   "Listing unrelated records without evaluating relationships",
   "Sorting records only by a single numeric column value",
   "Storing each relationship as an isolated text value with no links",
   "Determining communities or connected clusters in a network"
  ],
  "c": 3,
  "e": "Graph analytics works on relationships. Common tasks include community detection (finding groups of tightly connected vertices), PageRank/centrality (importance), shortest path and connectivity. The other options either ignore relationships or store them as isolated values, which is exactly what graph analytics avoids."
 },
 {
  "id": "p2-10",
  "part": 2,
  "n": 10,
  "q": "Which graph analytics capability is commonly used to rank important vertices based on their relationships?",
  "o": [
   "Vector distance metric",
   "JSON Duality View",
   "Private endpoint access",
   "PageRank"
  ],
  "c": 3,
  "e": "PageRank (originally used by Google to rank web pages) scores each vertex by the number and importance of the vertices linking to it, so well-connected, influential vertices rank highest. Vector distance measures semantic similarity, JSON Duality Views expose relational data as JSON, and private endpoint is a network setting."
 },
 {
  "id": "p2-11",
  "part": 2,
  "n": 11,
  "q": "A bank wants to identify indirect money movement patterns across several accounts to support fraud investigation. Which approach fits this requirement?",
  "o": [
   "Use a relational report that shows one transaction at a time without link analysis",
   "Store only summary totals for each account without relationship data",
   "Model accounts as vertices and transfers as edges in a property graph",
   "Store transaction descriptions as flat text and search by keywords only"
  ],
  "c": 2,
  "e": "Indirect money movement (A → B → C → D, or circular transfers) is about paths through connected accounts. A property graph with accounts as vertices and transfers as edges lets investigators run path and pattern queries (multi-hop traversal) to find money-laundering chains. Single-row reports, summary totals and keyword text search cannot follow these links."
 },
 {
  "id": "p2-12",
  "part": 2,
  "n": 12,
  "q": "A manufacturer needs graph analysis that reflects inserts and updates from operational tables immediately. How does a Property Graph View support this requirement?",
  "o": [
   "It converts source tables into JSON collections before graph queries can run.",
   "It provides graph visualization while requiring a separate platform for graph query execution.",
   "It stores a separate graph copy that is refreshed only during scheduled batch jobs.",
   "It uses metadata definitions so graph queries read current data from referenced objects."
  ],
  "c": 3,
  "e": "A Property Graph View is just a definition (metadata) stored in the data dictionary, mapping existing tables to vertices and edges. No data is copied, so every graph query reads the live rows of the underlying tables – inserts and updates appear immediately. That is why the other options (JSON conversion, separate platform, batch-refreshed copy) are wrong."
 },
 {
  "id": "p2-13",
  "part": 2,
  "n": 13,
  "q": "Why do developers often use JSON in applications?",
  "o": [
   "It requires a fixed schema before any data can be stored.",
   "It can store only numeric values and arrays.",
   "It maps well to application objects and supports nested structures.",
   "It replaces the need for APIs and CRUD operations."
  ],
  "c": 2,
  "e": "JSON looks just like the objects developers use in code, so data can move between the app and the database with little conversion, and it can nest objects and arrays (e.g. an order with its line items). It is schema-flexible (no fixed schema), supports strings, numbers, booleans, objects and arrays, and works WITH APIs/CRUD rather than replacing them."
 },
 {
  "id": "p2-14",
  "part": 2,
  "n": 14,
  "q": "How can developers access JSON Duality Views?",
  "o": [
   "Through exported JSON files loaded into a separate document store",
   "Through MongoDB-compatible APIs or SQL",
   "Through APEX-specific PL/SQL packages as the primary interface",
   "Through graph visualization queries in place of document APIs"
  ],
  "c": 1,
  "e": "JSON Relational Duality Views can be accessed with SQL, with REST (ORDS), and with the Oracle Database API for MongoDB – so MongoDB-style apps can read/write the documents while the data stays in relational tables. No export to a separate store is needed, and APEX or graph queries are not the primary interface."
 },
 {
  "id": "p2-15",
  "part": 2,
  "n": 15,
  "q": "How does a JSON collection table store documents in Oracle AI Database 26ai?",
  "o": [
   "It requires every JSON document to be decomposed into fixed relational columns before storage.",
   "It stores JSON documents only after they are exported to a separate document database.",
   "It is a schema-less collection model that stores JSON documents in JSON type objects.",
   "It stores only relational rows and cannot be queried with SQL."
  ],
  "c": 2,
  "e": "A JSON collection table (CREATE JSON COLLECTION TABLE orders;) stores each document in a single column of the native JSON data type (stored internally as OSON). Documents don't have to follow a fixed schema, and they can still be queried with SQL or the MongoDB API. Documents are not forced into relational columns and are not exported elsewhere."
 },
 {
  "id": "p2-16",
  "part": 2,
  "n": 16,
  "q": "Which JSON feature helps represent repeating child data inside one document?",
  "o": [
   "A flat property list with each child stored as a separate document",
   "A document identifier that points to an external table only",
   "A scalar property that stores one child value",
   "Arrays and nested objects"
  ],
  "c": 3,
  "e": "JSON represents repeating child data with arrays, and structured child data with nested objects – e.g. {\"orderId\":1, \"items\":[{\"sku\":\"A1\",\"qty\":2},{\"sku\":\"B7\",\"qty\":1}]}. All children stay inside one document. Storing each child separately, pointing to an external table, or using a single scalar value cannot hold a list of children in one document."
 },
 {
  "id": "p2-17",
  "part": 2,
  "n": 17,
  "q": "A service desk stores ticket text, account tier, and region in the database. The team wants semantically similar tickets from premium accounts in one country. Which solution meets this requirement?",
  "o": [
   "Use only account tier and region filters because semantics cannot be stored in the database.",
   "Use graph community detection because text similarity is not relevant.",
   "Order tickets by vector distance and filter by account tier and region in SQL.",
   "Use customer-managed keys to rank ticket text."
  ],
  "c": 2,
  "e": "This needs two things: semantic similarity (vector distance on the ticket text embedding) and business filters (premium tier, one country). Oracle lets you do both in one SQL query: WHERE tier='PREMIUM' AND region=:country ORDER BY VECTOR_DISTANCE(ticket_vec, :q). Filters alone miss meaning, graph community detection ignores text similarity, and encryption keys don't rank anything."
 },
 {
  "id": "p2-18",
  "part": 2,
  "n": 18,
  "q": "A support portal must search product manuals semantically while also filtering results by product line and support level stored in relational tables. How does Oracle AI Vector Search support this requirement?",
  "o": [
   "It requires semantic search results to be filtered outside the database after retrieval.",
   "It supports semantic search with relational business filters in an integrated database approach.",
   "It uses document APIs for search while excluding SQL-based business predicates.",
   "It stores structured filter values as graph relationships before search can run."
  ],
  "c": 1,
  "e": "Because vectors live in the same database as product line and support level, AI Vector Search can combine semantic search and relational filters in one query, inside the database. No filtering outside the database after retrieval, no need to drop SQL predicates, and no graph conversion is required."
 },
 {
  "id": "p2-19",
  "part": 2,
  "n": 19,
  "q": "A recruiting application must find the top job postings that semantically match a candidate's resume, but only in the candidate's preferred cities. How should the application meet this requirement?",
  "o": [
   "Use one SQL query that combines relational filters with vector distance ordering.",
   "Export all job postings to a separate vector platform and remove city filtering.",
   "Use Early maintenance so results are ranked sooner.",
   "Replace job descriptions with graph edge labels only."
  ],
  "c": 0,
  "e": "Pattern: WHERE city IN (:preferred_cities) ORDER BY VECTOR_DISTANCE(job_vec, :resume_vec) FETCH FIRST 10 ROWS ONLY. The filter keeps only preferred cities; the vector ordering ranks jobs by how well they match the resume; FETCH FIRST returns the top results. Exporting and removing filters breaks the requirement; maintenance and graph labels are irrelevant."
 },
 {
  "id": "p2-20",
  "part": 2,
  "n": 20,
  "q": "Which output can Select AI deliver to an application?",
  "o": [
   "A graph visualization generated from schema relationships",
   "A JSON export file generated from a collection table",
   "A maintenance recommendation generated from patch history",
   "A result set, a narrative, or the SQL"
  ],
  "c": 3,
  "e": "Select AI can return: the query result set (runsql), a natural-language narrative answer (narrate), the generated SQL (showsql) or an explanation of it (explainsql), plus general chat. It does not produce graph visualizations, JSON export files, or maintenance recommendations."
 },
 {
  "id": "p2-21",
  "part": 2,
  "n": 21,
  "q": "What happens after a user asks a business question with Select AI?",
  "o": [
   "The user must manually create embeddings before SQL can be generated.",
   "The system selects database tables and joins without using any schema metadata.",
   "The platform manages prompt engineering, interacts with an LLM, and produces the answer.",
   "The database disables SQL and switches to document APIs only."
  ],
  "c": 2,
  "e": "With Select AI the user just asks a question. The database builds the prompt (adding schema metadata from the AI profile), sends it to the configured LLM (e.g. OCI Generative AI, OpenAI), receives the generated SQL, runs it and returns the answer. Users don't create embeddings manually, schema metadata IS used, and SQL is not disabled."
 },
 {
  "id": "p2-22",
  "part": 2,
  "n": 22,
  "q": "In a RAG-style application, where does similarity search apply?",
  "o": [
   "It creates the original source documents from the generated answer.",
   "It evaluates user authentication rules before retrieving context.",
   "It retrieves the most relevant stored content for the user's question.",
   "It replaces the generation step by returning only raw vector values."
  ],
  "c": 2,
  "e": "In RAG, similarity search is the Retrieval step: the question is embedded and compared to stored vectors to fetch the most relevant chunks, which are then passed to the LLM for the Generation step. It does not create source documents, handle authentication, or replace the LLM's generation with raw vectors."
 },
 {
  "id": "p2-23",
  "part": 2,
  "n": 23,
  "q": "A company wants a GenAI assistant that answers policy questions by grounding responses in its internal documents. Which use of AI Vector Search best supports this design?",
  "o": [
   "Retrieve semantically similar document chunks to provide context for generation.",
   "Replace all policy documents with graph edge IDs.",
   "Use only keyword matching because enterprise data must not use embeddings.",
   "Return unfiltered database patches as the answer context."
  ],
  "c": 0,
  "e": "To ground a GenAI assistant in internal policies, AI Vector Search finds the policy chunks most similar in meaning to the question and supplies them as context to the LLM, reducing hallucinations. Graph edge IDs, keyword-only matching (misses synonyms) and database patches are not useful grounding."
 },
 {
  "id": "p2-24",
  "part": 2,
  "n": 24,
  "q": "Which statement describes Artificial Intelligence?",
  "o": [
   "Systems eliminate the need for training data in every use case.",
   "Systems use data and algorithms to perform tasks that normally require human intelligence.",
   "Systems replace databases by storing all data as graphs.",
   "Systems are identical to AGI in all current enterprise products."
  ],
  "c": 1,
  "e": "Artificial Intelligence = computer systems that perform tasks normally needing human intelligence (recognising images, understanding language, predicting, deciding) using data and algorithms. AI usually NEEDS training data, has nothing to do with storing data as graphs, and today's enterprise AI is NOT AGI (Artificial General Intelligence, human-level general reasoning)."
 },
 {
  "id": "p2-25",
  "part": 2,
  "n": 25,
  "q": "Which example is a common AI use case?",
  "o": [
   "Listing database tables alphabetically in a schema browser",
   "Manually assigning a subnet CIDR during database provisioning",
   "Rotating an encryption key on a fixed compliance schedule",
   "Detecting fraudulent transactions from behavior patterns"
  ],
  "c": 3,
  "e": "Fraud detection is a classic AI/ML use case: the model learns normal behaviour from historical transactions and flags unusual (anomalous) ones. Listing tables alphabetically, manually assigning a subnet CIDR, and rotating keys on a fixed schedule are rule-based admin tasks – no learning or intelligence involved."
 },
 {
  "id": "p2-26",
  "part": 2,
  "n": 26,
  "q": "What does the Oracle VECTOR data type enable?",
  "o": [
   "Automatic conversion of every table into a graph model",
   "Browser-based low-code page design",
   "Automatic JSON schema validation for all APIs",
   "Native storage of vector values in the database"
  ],
  "c": 3,
  "e": "The VECTOR data type (e.g. VECTOR(768, FLOAT32)) stores embeddings natively in Oracle tables next to business data, and works with vector functions (VECTOR_DISTANCE) and vector indexes. It does not convert tables to graphs, design web pages (that's APEX), or validate JSON schemas."
 },
 {
  "id": "p2-27",
  "part": 2,
  "n": 27,
  "q": "How can developers create vectors for data objects in Oracle AI Database 26ai?",
  "o": [
   "By loading the data into a separate vector service before querying it",
   "By converting all source objects into Property Graph Views first",
   "By using a built-in vectorization function",
   "By defining every vector as a JSON document manually"
  ],
  "c": 2,
  "e": "Oracle AI Database 26ai can generate embeddings in the database using built-in functions such as VECTOR_EMBEDDING (with an ONNX model loaded into the database) or DBMS_VECTOR.UTL_TO_EMBEDDING. No separate vector service, Property Graph View or hand-written JSON vectors are required."
 },
 {
  "id": "p2-28",
  "part": 2,
  "n": 28,
  "q": "Which statement about AI vectors is accurate?",
  "o": [
   "They represent semantic content for items such as text, images, audio, or relational data.",
   "They represent exact keyword tokens used only for traditional text search.",
   "They represent JSON document schemas used for API compatibility.",
   "They represent graph traversal paths rather than semantic similarity."
  ],
  "c": 0,
  "e": "An AI vector is a list of numbers produced by an embedding model that captures the MEANING (semantic content) of an item – a sentence, document, image, audio clip or even a row of data. Similar items get similar vectors. They are not keyword tokens (that's traditional text search), JSON schemas, or graph paths."
 },
 {
  "id": "p2-29",
  "part": 2,
  "n": 29,
  "q": "A business team wants to deploy a no-code AI agent for HR policy questions. The agent must use internal policy documents and be validated before employees can access it. Which Agent Factory capability path fits this requirement?",
  "o": [
   "Select a pre-built graph model and publish it before connecting policy documents.",
   "Use Database Actions to deploy the agent because Agent Factory is limited to database tools.",
   "Configure the data-source connection, test the agent responses, and publish the agent for users.",
   "Publish the agent first, then add documents after employees begin using it."
  ],
  "c": 2,
  "e": "Same Agent Factory flow as in Part 1 Q25: connect the knowledge source (HR policy documents) → test/validate responses → publish for employees. Publishing first, or using a graph model / Database Actions instead of Agent Factory, does not meet the 'validate before access' requirement."
 },
 {
  "id": "p2-30",
  "part": 2,
  "n": 30,
  "q": "What does Oracle mean by a converged database strategy?",
  "o": [
   "One database architecture supports multiple data types and workloads together.",
   "One reporting tool replaces SQL, JSON APIs, and graph queries.",
   "One application server manages all databases without schema changes.",
   "One storage tier is reserved only for AI workloads and vector indexes."
  ],
  "c": 0,
  "e": "A converged database = one database engine that natively handles many data types (relational, JSON, graph, spatial, vector, text, XML) and many workloads (transactions, analytics, AI) together, instead of using a separate specialised database for each. It is not a single reporting tool, an app server, or an AI-only storage tier."
 },
 {
  "id": "p2-31",
  "part": 2,
  "n": 31,
  "q": "Which set is included in the Oracle AI Database 26ai converged approach?",
  "o": [
   "JSON, document APIs, storage buckets, monitoring, and billing",
   "Relational, XML, spatial, external-only graph stores, and separate vector databases",
   "Relational, JSON, vector, object-only files, and separate document stores",
   "Relational, JSON, vector, graph, and spatial"
  ],
  "c": 3,
  "e": "The Oracle AI Database 26ai converged approach includes relational, JSON (document), vector, graph and spatial (and also XML, text, etc.) all inside the same database. The other options include 'external-only', 'separate' or non-database items (billing, buckets), which contradicts the converged idea."
 },
 {
  "id": "p2-32",
  "part": 2,
  "n": 32,
  "q": "What is the operational benefit of using a converged database instead of several point-solution databases?",
  "o": [
   "It automatically removes the need to review security policies for database workloads.",
   "It guarantees that all workloads use the same physical schema and access method.",
   "It can reduce operational complexity by using a more consistent security and patching approach.",
   "It requires every application team to maintain a separate synchronization process."
  ],
  "c": 2,
  "e": "With one converged database you have one set of security policies, one patching/upgrade process, one backup strategy and no data synchronisation between systems – fewer things to manage. It doesn't remove the need to review security, doesn't force one physical schema for everything, and avoids (not requires) separate sync processes."
 },
 {
  "id": "p2-33",
  "part": 2,
  "n": 33,
  "q": "How is Oracle APEX described?",
  "o": [
   "Oracle's JSON binary storage format",
   "Oracle's dedicated graph-only engine",
   "Oracle's encryption key lifecycle manager",
   "Oracle's low-code development platform"
  ],
  "c": 3,
  "e": "Oracle APEX (Application Express) is Oracle's low-code platform for building web apps on the Oracle Database. OSON is the JSON binary format, Graph Studio/PGX handle graphs, and OCI Vault manages encryption keys."
 },
 {
  "id": "p2-34",
  "part": 2,
  "n": 34,
  "q": "Why is APEX associated with fast application delivery?",
  "o": [
   "It supports application development only after a separate middleware stack is configured.",
   "It is a low-code platform designed to reduce manual coding and speed up application development.",
   "It accelerates delivery primarily by auto-generating database schemas rather than focusing on the application layer.",
   "It requires teams to build every UI component entirely from scratch."
  ],
  "c": 1,
  "e": "APEX speeds delivery because it provides declarative builders, wizards and pre-built components (forms, reports, charts, authentication), so less code is written by hand. It runs inside the database (no separate middleware stack required), focuses on the application layer, and does not require building every UI component from scratch."
 },
 {
  "id": "p2-35",
  "part": 2,
  "n": 35,
  "q": "Which set of characteristics is commonly used to describe Autonomous AI Database?",
  "o": [
   "Self-coding, self-licensing, and self-networking",
   "Self-driving, self-securing, and self-repairing",
   "Self-training, self-upgrading, and self-documenting",
   "Self-hosted, self-audited, and self-architected"
  ],
  "c": 1,
  "e": "The three 'selfs' of Autonomous AI Database: Self-driving – automates provisioning, tuning, scaling, patching, backups. Self-securing – automatic security patching, encryption by default, protection from external and internal threats. Self-repairing – automatic failure detection/recovery for high availability (99.95% SLA). The other combinations are made-up."
 },
 {
  "id": "p2-36",
  "part": 2,
  "n": 36,
  "q": "Which offering is positioned for JSON-centric workloads and includes Oracle Database API for MongoDB?",
  "o": [
   "Oracle APEX Service",
   "Autonomous AI JSON Database",
   "Autonomous AI Transaction Processing only",
   "Autonomous AI Lakehouse"
  ],
  "c": 1,
  "e": "Autonomous AI JSON Database is the offering for JSON-centric (document) applications and includes the Oracle Database API for MongoDB, so MongoDB drivers and tools work against it. APEX Service is for low-code apps, Transaction Processing is the general OLTP offering, and Lakehouse (formerly Data Warehouse) is for analytics."
 },
 {
  "id": "p2-37",
  "part": 2,
  "n": 37,
  "q": "How does Autonomous AI Database automation help reduce database administration work?",
  "o": [
   "It reduces the need for some routine administration but still requires separate manual scaling for every workload change.",
   "It shifts most operational tasks to manual administration by the customer.",
   "It automates management tasks across infrastructure and database operations.",
   "It supports automation for provisioning only, but not security or availability tasks."
  ],
  "c": 2,
  "e": "Autonomous automation covers both the infrastructure (servers, storage, OS, network) and the database (tuning, indexing, patching, backups, scaling, security, availability). That is why it reduces DBA work. It is not limited to provisioning only, and scaling can be automatic (auto-scaling) rather than manual for every change."
 },
 {
  "id": "p2-38",
  "part": 2,
  "n": 38,
  "q": "What describes the role of the Database Actions menu in Autonomous AI Database?",
  "o": [
   "A workspace used only to configure vector index organization settings",
   "The central location for built-in database tools and related workspaces",
   "A network access option used to isolate database connections",
   "A graph analytics engine used instead of SQL tools"
  ],
  "c": 1,
  "e": "Database Actions is the launchpad where you open SQL Worksheet, Data Studio, APEX, REST, JSON, Graph Studio, ML and administration pages. It is not just a vector index setting, not a network option, and not a graph engine replacing SQL."
 },
 {
  "id": "p2-39",
  "part": 2,
  "n": 39,
  "q": "Beyond development tools, which workspace is available through Database Actions?",
  "o": [
   "Private endpoint configuration workspace",
   "Autonomous AI Database maintenance scheduler",
   "Data Studio",
   "Graph-only administration workspace"
  ],
  "c": 2,
  "e": "Besides development tools (SQL, REST, JSON, APEX), Database Actions offers the Data Studio workspace for data loading, cataloguing, transformation, analysis and sharing. The other choices (private endpoint workspace, maintenance scheduler, graph-only admin workspace) are not Database Actions workspaces."
 },
 {
  "id": "p2-40",
  "part": 2,
  "n": 40,
  "q": "A developer wants one place to work with SQL, REST endpoints, JSON features, APEX, and machine learning tools. Which entry point should the developer use?",
  "o": [
   "Database Actions",
   "Vector target accuracy settings",
   "Customer-managed key rotation",
   "Property Graph View definition only"
  ],
  "c": 0,
  "e": "Database Actions is the single browser-based entry point that groups SQL Worksheet, REST (ORDS), JSON, APEX and Oracle Machine Learning. Vector target accuracy, customer-managed key rotation and Property Graph View definitions are individual features, not an entry point to all tools."
 }
];
