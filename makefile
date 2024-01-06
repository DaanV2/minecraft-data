
compile:
	npm run compile

gen: compile
	npm run generate

test: compile
	npm run test