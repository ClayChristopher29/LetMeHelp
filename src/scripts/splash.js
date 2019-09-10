const introPage = {

    printIntroPage: function() {

        document.querySelector("#main-container").innerHTML = `
        <div class="navbar-fixed">
        <nav class ="#424242 grey darken-3">
          <div class="nav-wrapper">

            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html" id = "resources-link">Resources</a></li>
              <li><a href="badges.html" id = "journal-link">Journal</a></li>
              <li><a href="sass.html" id = "schedule-link">Schedule</a></li>
              <li><a href="sass.html" id = "FAQ-link">FAQ</a></li>
              <li><a href="sass.html" id = "contact-link">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
         <header>
        <h1>Let Me Help</h1>
    </header>

    <main>
        <p>Welcome to "Let Me Help. Here we are here to provide a personal toolbox to help you in your journey towards recovery.</p>
        <p>We believe in the idea that if you have a heartbeat then you have a chance, We hope that this tool will give you the tools you need to be successful. </p>
        <p>In this site we have given information on our "Resources page", which can be found at the top of this page and will give you links, addresses, phone numbers, and links to local recovery, and health facilities located in the Huntington, W.V. area</p>
        <p>There is also a "Personal Journal" section that will give you the option to log and track your progress during this journey. We believe that giving yourself a roadmap on personal accomplishments is key in providing yourself milestones, so you can reflect on your successes, will give you extra motivation.</p>
        <p>"Let me Help", has collaborated with local folks in the community who are in long term recovery, to help adapt this website with tools, and ideas.
        We hope that by keeping this community in touch with eachother we can also provide a useful network so that we can all work together to help eachother on the path to reaching your goals. This site is also private usage page, your idenity is kept private, we want you to feel safe and secure, and free of any judgement while you work towards recovery.</p>
        <p>Lastly we would like to thank you for visting our page, if you have any comments, or ideas you would like to see implemented here, please visit the "Contact Us" section and leave a comment, we are always looking for ways to improve this site.</p>

    </main>`
    }
}
export default introPage