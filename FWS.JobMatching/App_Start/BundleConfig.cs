using System.Web;
using System.Web.Optimization;

namespace FWS.JobMatching
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));
            
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/loading-bar.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/base").Include(
                        "~/Scripts/bootstrap.js"
                        , "~/Scripts/respond.js"
                        , "~/Scripts/jquery-{version}.js"
                        , "~/Scripts/angular.js"
                        , "~/Scripts/angular-route.js"
                        , "~/Scripts/loading-bar.js"
                        , "~/Scripts/moment.js"
                        , "~/Scripts/angular-ui/ui-bootstrap.js"
                        , "~/Scripts/angular-ui/ui-bootstrap-tpls.js"
                        , "~/Scripts/Site/JobList/*.js"
                         //ToDo - remove the mocking
                        , "~/Scripts/Site/JobList/Services.Mock/*.js"
                        , "~/Scripts/chance.js"
                        ));
        }
    }
}
