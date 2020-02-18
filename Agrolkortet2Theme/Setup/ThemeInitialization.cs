using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using Lantmannen.Setup;
using Lantmannen.Theme;

namespace Lantmannen.Agrolkortet2Theme.Setup
{
    [InitializableModule]
    [ModuleDependency(typeof(EPiServer.Web.InitializationModule))]
    public class ThemeInitialization : IInitializableModule
    {
        public void Initialize(InitializationEngine context)
        {
            //Add initialization logic, this method is called once after CMS has been initialized

            ThemeList.Register(new Lantmannen.Agrolkortet2Theme.Setup.Theme());

            PluginList.Register(new Lantmannen.Agrolkortet2Theme.Setup.PagePlugin());
        }

        public void Uninitialize(InitializationEngine context)
        {
            //Add uninitialization logic
        }
    }
}
