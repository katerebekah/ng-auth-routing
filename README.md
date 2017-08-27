# Angular 4 Auth Routing Example

Synopsis: Sample app to retrieve a configuration json (or any external resource) before the app loads the initial components/views.

### Setup

```
git clone {repo}
cd ng-auth-routing
npm install
ng serve
```

### Main Points

This app requires a resource to be retrieved before the browser loads any of the components. This is the base url. This base url here is the location of another json file, but in a production app, this is the base url for an api. 

This app requires authentication. The process for authenticating is to use the base url to get an access token. Here it's merely another json, but for a production app, this would be a call to a token authentication service. Before a component will load, the app will call to the AuthGuard to see if it CanActivate. This method checks for the token, using the base url.

The home component loads a list of items for display. In order to retrieve the list, the application needs both the base url and the token loaded before the component loads.


### Discoveries

The Config Service needs to call for the base url, then the Security Service has to retrieve the token based on that base url before the components load. This is completed through using the APP_INITIALIZER and a factory function.

In the AppModule, I load all the necessary services in the providers, but I also include

`{ provide: APP_INITIALIZER, useFactory: securityFactory, deps: [SecurityService], multi: true }`

This hooks allows the securityFactory function to be called before components load. The securityFactory has the SecurityService as a dependency, and the multi attribute just allows more than one function to tie into the APP_INITIALIZER.

The factory looks like this:

```ts
export function securityFactory(securityService: SecurityService) {
  return () => {
    return securityService.loadUrl();
  };
}
```

It's important to note that the function requires a return statement. This is the mistake I kept making. If the factory function returns a value/promise, the app components won't load until the function has executed (and the promise is fufilled). This loadUrl function calls the config service for the base url, then gets the token based on that.

The AuthGuard is calling to get the token on CanActivate, which is the same method that sets the url for the Security Service. This part isn't really intended, because there's no need to call for it again. To be honest, the AuthGuard could simply check for the presence of a token and be done. If the token doesn't exist at this point in the application startup, the person wouldn't be authenticated. 