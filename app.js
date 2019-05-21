const PageState = function() {
  let currState = new homeState(this);
  this.init = function() {
    this.change(new homeState());
  };

  this.change = function(state) {
    currState = state;
  };
};

const homeState = function(page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
        <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    `;
};

const aboutState = function(page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
        <p>This is about page</p>
    `;
};

const contactState = function(page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
    <form>
    <div class="form-group">
      <label for="Name">Name</label>
      <input type="text" class="form-control" id="Name" placeholder="Enter your name">
    </div>
    <div class="form-group">
      <label for="Email">Email address</label>
      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `;
};

const page = new PageState();

page.init();

const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

home.addEventListener("click", e => {
  page.change(new homeState());

  e.preventDefault();
});

about.addEventListener("click", e => {
  page.change(new aboutState());

  e.preventDefault();
});

contact.addEventListener("click", e => {
  page.change(new contactState());

  e.preventDefault();
});
