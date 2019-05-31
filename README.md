# BPSS - Blockchain-based Paper Submission System

![](Source/func.png)

Front-end:
- bpss-react: Using react.js as front-end, support pdf and txt upload
- koa-backend: Using koa.js as back-end, upload file and meta data to mongodb server via mongoose
    - /blocks: list uploaded papers.
    - /blockchains: list blocks hashes.
- mailpy:
    - Include different type of solutions for mailing.
    - Sendgrid / anonymouse / G-suit
- pdf2txt:
    - Extra text from PDF file.
- Relayer:
    - Main file in cli-tool
    - Use oclif to build cli-tool
    - Use nc as file transfer tool.
    - Support RSA512 algorithm.
- Docker-watcher:
    - Simple script for watching if docker is down.
- old:
    - Tests and trys.