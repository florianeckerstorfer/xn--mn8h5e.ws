deploy:
	gulp build --prod
	scp -r ./dist/* wave:/var/www/xn--mn8h5e.ws
