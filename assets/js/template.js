class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Intro -->
        <div id="intro">
            <h1>Patrick Peinan<br/>
            Wang</h1>
            <p> Master of Science in Computer Sciences student at <a href="https://www.northeastern.edu">Northeastern University</a> <br />
            Prospective Software Engineer and Data Scientist <a href="https://www.linkedin.com/in/patrick-peinan-wang-3809158a/">@Peinan Wang</a>.</p>
            <ul class="actions">
                <li><a href="#header" class="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
        </div>

        <!-- Header -->
        <header id="header">
            <a href="About Patrick.html" class="logo">About Me</a>
        </header>

        <!-- Nav -->
        <nav id="nav">
            <ul class="links">
                <li class="active"><a href="index.html">Projects</a></li>
                <li><a href="About Patrick.html">About Patrick</a></li>
            </ul>
            <ul class="icons">
                <li><a href="https://www.linkedin.com/in/patrick-peinan-wang-3809158a/" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/peinanwang" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
            </ul>
        </nav>
        `;

    }
}


customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <footer id="footer">
        
            <section class="split contact">
                <section class="alt">
                    <h3>Location</h3>
                    <p> Burnaby, British Columbia </p>
                </section>
                <section>
                    <h3>Phone</h3>
                    <p>(778) 927-6607</p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="mailto:wang.pein@northeastern.edu">wang.pein@northeastern.edu</a><br>
                        <a href="mailto:peinan_wang@hotmail.com">peinan_wang@hotmail.com</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul class="icons alt">
                        <li><a href="https://www.linkedin.com/in/patrick-peinan-wang-3809158a/" class="icon brands alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/peinanwang" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                    </ul>
                </section>
            </section>
        </footer>
    
        <!-- Copyright -->
        <div id="copyright">
            <ul>
                <li>Year &copy; ${ new Date().getFullYear() }</li>
                <li>Peinan (Patrick) Wang</li></ul>
        </div>
            `;
        }
    }
    
    customElements.define('my-footer', MyFooter);