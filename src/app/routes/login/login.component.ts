import { Component, OnInit, OnDestroy } from "@angular/core";
// Apollo client
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
// Router for redirect after signup
import { Router } from "@angular/router";
// User input
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";

/**
 * The required input for a user in order to signin
 */
interface ISigninInput {
  name: String;
  email: String;
  password: String;
}

/**
 * Enables login. Also has a style loader that applies global css
 */
@Component({
  selector: "isf-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  private signin: Boolean = true;
  private customStyles: Node;

  private signupActivated: Boolean = true;
  private signupInput: ISigninInput;
  // Mutation to signup the user
  private signupMutation: string = gql`
    mutation signup($name: String!, $email: String!, $password: String!) {
      signup(name: $name, email: $email, password: $password) {
        token
      }
    }
  `;

  /**
   * Inject Apollo and Angular Router
   * @param apollo Inject Apollo to use GraphQl queries to sign up
   * @param router To enable navigating to the feed after signup
   */
  constructor(private apollo: Apollo, private router: Router) {
    // Mock the signup data
    this.signupInput = {
      name: "asdf",
      email: "asdf@asdf.com",
      password: "asdf"
    };
  }

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
   * Logs the entered signup data.
   * @param signupForm The data that the user has entered during signup. Gets validated in the template.
   */
  private logSignupData(signupForm: NgForm) {
    // Log test message
    for (let field of Object.keys(signupForm.value)) {
      console.log(field);
    }
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
    const styleNode = document.createElement("style");
    // Add the css to the style wrapper
    styleNode.appendChild(document.createTextNode(loginStyleCss));
    return styleNode;
  }

  /**
   * Show signup form
   */
  private activateSignup() {
    this.signin = false;
    this.signupActivated = true;
  }

  /**
   * Show login form/hide signup form
   */
  private activateLogin() {
    this.signin = true;
    this.signupActivated = false;
  }

  /**
   * Sign up the user with the provided data
   */
  private signup() {
    console.log("Signing up ...");
    // Sign up the user
    this.apollo
      .mutate({
        mutation: this.signupMutation,
        variables: {
          name: "asdf5",
          email: "test7@example3.com",
          password: "asdf"
        }
        // Get back the token, handle errors
      })
      .subscribe(
        ({ data }) => {
          console.log("Received data");
          this.router.navigate([""]);
        },
        error => {
          console.log("Failed to sign up.");
        }
      );
    console.log(
      "Provided packet:",
      JSON.stringify(this.signupInput).toString()
    );
  }
}
