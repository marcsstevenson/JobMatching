using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FWS.JobMatching.Startup))]
namespace FWS.JobMatching
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
