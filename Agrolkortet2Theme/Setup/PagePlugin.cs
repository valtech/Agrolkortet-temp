
using Lantmannen.Setup;
using Lantmannen.Theme;
namespace Lantmannen.Agrolkortet2Theme.Setup
{

    [PagePlugin(FooterSortOrder = 1000)]
    public class PagePlugin : CoreThemePagePlugin
    {
        public override string Id => "Agrolkortet2";
    }
}
