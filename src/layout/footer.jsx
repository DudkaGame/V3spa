function Footer() {
   return (
      <footer className="page-footer #7cb342 light-green darken-1">
         <div className="footer-copyright">
            <div className="container">
               by D © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="https://github.com/DudkaGame/V3spa">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
