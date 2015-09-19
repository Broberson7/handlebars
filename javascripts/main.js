// Define an object to hold the data for a template
var entryData = {
  title: "My New Post", 
  body: "This is my first post!",
  tags: [
    {
      category: "technology",
      name: "handlebars",
      project: "Practice Makes Perfect"
    },
    {
      category: "author",
      name: "steve"
    }
  ]
};

var taglineData = {
  author_first_name: "Steve",
  author_last_name: "Brownlee",
  authored_date: "January 29, 2015"
};

var articles = {
  entries: [
  {
    date: "September 19, 2015",
    author: "Sybia Roberson",
    text: "Books"
  },
  {
    date: "September 19, 2015",
    author: "Sybia Roberson",
    text: "Books"
  },
  {
    date: "September 01, 2015",
    author: "Sybia Roberson",
    text: "Books"
  }]
}; 

var artist = {
    name: "Drake",
    genre: "Hip Hop"
};
var album = {
    name: "James Blake",
    artist: "Retrograde",
    year: "2013"
};
var songs = {
    name: "Motives",
    album: "Hours Spent Loving You"
};    
 
  








// Ignore this the first time through... move along
Handlebars.registerPartial("tagline", Handlebars.compile($("#tagline-partial").html())(taglineData));
Handlebars.registerPartial("blog", Handlebars.compile($("#blog-partial").html())(articles));
Handlebars.registerPartial("artist", Handlebars.compile($("#artist-partial").html())(artist));
Handlebars.registerPartial("album", Handlebars.compile($("#album-partial").html())(album));
Handlebars.registerPartial("songs", Handlebars.compile($("#songs-partial").html())(songs));


// Grab the HTML from the appropriate <script> tag
var entryHTML = $("#entry-template").html();


// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(entryData);

// Now take the final, compiled HTML and inject it into your DOM
$("#entryOutput").append(entryOutput);

