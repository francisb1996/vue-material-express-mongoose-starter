all:
	cd ./portal; npm i; npm run-script build; cd ..;
	cd ./server; npm i; npm start;
