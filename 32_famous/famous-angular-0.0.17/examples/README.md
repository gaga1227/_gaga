famous-angular-examples
=======================

Integration examples of Famo.us + AngularJS

##Running

### The easy way

  1. Make sure that you have [npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) installed
  2. In your terminal, run `npm install -g serve`
  3. In your terminal, change your directory to famous-angular-examples/app
  4. In your terminal, run `serve`

You should then be able to open the examples at http://localhost:3000



### The more powerful way

  1. Make sure that you have [npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) installed
  2. In your terminal, run `npm install -g gulp`
  3. In your terminal, run `npm install` to install package dependencies, including bower dependencies
  4. In your terminal, from the famous-angular-examples base directory, run `gulp`

You should then be able to open the examples at http://localhost:4000



### The most powerful way, for library development
(if you want to make changes to the main famous-angular library and have those changes take effect live in this examples project)

  1. Make sure that you have [npm](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) installed
  2. Check out the main [Famo.us/Angular](https://github.com/Famous/famous-angular/) repository, following the instructions in its [README.md](https://github.com/Famous/famous-angular/blob/master/README.md)
  3. In your terminal, change directory to the famous-angular-examples directory that's INSIDE of the famous-angular directory. If you followed the library setup examples in the README.md, the famous-angular-examples submodule should be initialized and ready to go.
  4. In your terminal, run `npm install` to install package dependencies, including bower dependencies
  5. Back in the main famous-angular directory, run `npm install`
  6. Ensure you have gulp installed with `npm install -g gulp`
  7. From the main famous-angular directory, run `gulp dev` 

Then open http://localhost:4000 in your browser.

####Troubleshooting
If nothing loads try changing the default server port in gulpfile.js and re-run `gulp`.
