.PHONY: build
build:
	docker build -t temponent -f build/Dockerfile ./apps/server