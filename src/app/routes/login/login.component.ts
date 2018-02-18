import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Enables login. Also has a style loader that applies global css.
 */
@Component({
  selector: 'isf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private signin: Boolean = true;
  private customStyles: Node;

  constructor() { }

  /**
   * Add a custom stylesheet with global scope to style the template in order to center the login form
   */
  ngOnInit() {
    // Add the stylesheet to the head (these are global styles, forking the main template would make no sense here)
    this.customStyles = document.head.appendChild(this.createStyles());
  }

  /**
   * Removes the styles when they are not needed anymore
   */
  ngOnDestroy() {
    // Remove the stylesheet from the head if it's not needed anymore
    document.head.removeChild(this.customStyles);
  }

  /**
   * Creates the css styles from a provided string
   */
  private createStyles() {
    // The css that shall he applied
    const loginStyleCss = `
    /* Enable floating labels (Those are CSS variables) */
    :root {
      --input-padding-x: .75rem;
      --input-padding-y: .75rem;
    }
    /* Make the canvas for the rest of the components at least as big as the screen */
    body,
    isf-root {
      min-height: 100vh;
    }
    /* Center the login input */
    isf-root {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    /* Since there are no routes, remove the router outlet (fix flexbox centering) */
    router-outlet {
      display: none;
    }
    /* Hide the brand in the navbar as it would be duplicated */
    .navbar-brand {
      visibility: hidden!important;
    }
    `;
    // The element wrapper
    const styleNode = document.createElement('style');
    // Add the css to the style wrapper
    styleNode.appendChild(document.createTextNode(loginStyleCss));
    return styleNode;
  }

  private activateSignup() {
    this.signin = false;
    console.log('Signup Activated');
  }

  private activateLogin() {
    this.signin = true;
    console.log('Login Activated');
  }

}
