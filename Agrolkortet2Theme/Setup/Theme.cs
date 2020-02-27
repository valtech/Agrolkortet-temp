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
                yield return new ThemeStyle("CalloutBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("LogoBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("ContentBlock", "Standard", string.Empty, true);
				yield return new ThemeStyle("ContentBlock", "Login", "login-area", true);

				yield return new ThemeStyle("CookieInformationBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("FileListBlock", "Standard", string.Empty, true);
                
                yield return new ThemeStyle("BreadcrumbsBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("ListBlock", "Standard - Grey background", string.Empty, true);

                yield return new ThemeStyle("NavigationBlock", "Standard", string.Empty, true);

                yield return new ThemeStyle("StandardPage", "Article page", "article-page", true);
                yield return new ThemeStyle("StandardPage", "Start page", "start-page");

                // page wrapper
                yield return new ThemeStyle("StandardPage", ThemeStyleKeys.PageTypeWrapper, "standard-page");

                //List styles
                yield return new ThemeStyle("ListBlock", "White background", "list--white-background");
                yield return new ThemeStyle("ListBlock", "Grey background - White teasers", "list--white-teasers");
                yield return new ThemeStyle("ListBlock", "Ping Pong", "list--ping-pong");
                yield return new ThemeStyle("ListBlock", "Single row", "list--single-row");
                yield return new ThemeStyle("ListBlock", "Single row - White background", "list--single-row list--white-background");
            }
        }
    }
}
