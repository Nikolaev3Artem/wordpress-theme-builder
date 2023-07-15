Hy this is gulp project for wordpress there you can create your own theme's in short 
terms.<br>
First of all you need to download wordpress on your own computer.<br>
- <code>https://uk.wordpress.org/download/</code>

When you are ready you need move to theme folder<br>
- <code>cd wordpress/wp-content/themes</code>

Next, you need to download git project<br>
- <code>git clone https://github.com/Nikolaev3Artem/wordpress-theme-builder.git</code>

Then you need to download Node JS for your computer if you don't have it<br>
- <code>https://nodejs.org/ru/download</code>

And use this command to download gulp <br>
- <code>npm install gulp</code>
- <code>npm install gulp-rename</code>

Here you go! You can use my own gulp project

Working commands: <br>
- <code>gulp template - it creates standart theme structure for your theme(HTML folder and Prod folder), you can customize it in gulp/tasks/template.js and gulp/config/path.js</code>
- <code>gulp clean - Removing prod folder </code>
- <code>gulp build - Copying all files from dev assets folder to prod assets folder </code>
- <code>gulp build:css - Copying all css from dev assets folder to prod assets folder </code>
- <code>gulp build:js - Copying all js from dev assets folder to prod assets folder </code>
- <code>gulp build:images - Copying all images from dev assets folder to prod assets folder </code>