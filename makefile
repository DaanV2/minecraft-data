
compile:
	npm run compile


gen: compile
	npm run generate

generate: gen

test: compile
	npm run test