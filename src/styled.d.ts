// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    successColor: string;
    failureColor: string;
  }
}
