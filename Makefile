.DEFAULT_GOAL: build

.PHONY: all
all: build

.PHONY: build
build:
	docker build -t temponent -f build/Dockerfile ./apps/server

.PHONY: debug
debug:
	npx tsx apps/server/src/index.ts