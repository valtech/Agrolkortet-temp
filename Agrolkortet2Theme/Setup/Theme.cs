using Lantmannen.Theme;
using System.Collections.Generic;


namespace Lantmannen.Agrolkortet2Theme.Setup
{

    public class Theme : CoreTheme
    {
        public override string Id => "Agrolkortet2";

        public override IEnumerable<ThemeStyle> Styles
        {
            get
            {
	            // Default "Standard" styles (All modules should have one, use string.Empty for no class)
                yield return new ThemeStyle("CalloutBlock", "Image (67%) and text (33%)", "callout--67-33", true);
                yield return new ThemeStyle("CalloutBlock", "Image and caption 33%", "callout--33");
                yield return new ThemeStyle("CalloutBlock", "Image and caption 100%", "callout--100");

                yield return new ThemeStyle("LogoBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("ContentBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("CookieInformationBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("FileListBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("BreadcrumbsBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("NavigationBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("StandardPage", "Article page", "article-page", true);
                yield return new ThemeStyle("StandardPage", "Start page", "start-page");

                // page wrapper
                yield return new ThemeStyle("StandardPage", ThemeStyleKeys.PageTypeWrapper, "standard-page");
            }
        }
    }
}
