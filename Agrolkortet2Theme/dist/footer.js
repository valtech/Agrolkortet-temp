"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
  'use strict';

  app.CookieinfoHandler = function () {
    var cookiewrapSelector = '.cookieinformation';
    var cookieclearBtnSelector = '.cookieinformation-clearbtn';

    var set = function set(key, value) {
      key = encodeURIComponent(key);
      value = encodeURIComponent(value);
      document.cookie = key + '=' + value + '; ' + 'expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;';
      return true;
    }; // Gets a cookie and returns its value


    var getValue = function getValue(key) {
      if (_typeof(key) !== _typeof('str')) {
        return false;
      }

      var regex = '(?:(?:^|.*;\\s*)' + encodeURIComponent(key) + '\\s*\\=\\s*([^;]*).*$)|^.*$';
      var value = document.cookie.replace(new RegExp(regex), '$1');
      value = decodeURIComponent(value);
      return value.length > 0 ? value : false;
    };

    this.init = function () {
      if (this.hasShownBefore() === false) {
        this.wrap = $(cookiewrapSelector);
        this.wrap.removeClass('is-hidden');
        $('body').addClass('has-cookie-information');
        this.btn = $(cookieclearBtnSelector);
        bindUIActions.call(this);
      }
    };

    var bindUIActions = function bindUIActions() {
      var that = this;
      this.btn.on('click', function () {
        that.clearMessage.call(that);
        $('body').removeClass('has-cookie-information');
      });
    }; // Returns true if cookie information has been shown before


    this.hasShownBefore = function () {
      return getValue('hasshowncookie') === '1';
    };

    this.clearMessage = function () {
      this.wrap.addClass('is-hidden');
      set('hasshowncookie', '1');
    };
  };
})(window.Agrolkortet2Theme);
"use strict";

(function () {
  "use strict";

  window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};
  var cookieInfo = new window.Agrolkortet2Theme.CookieinfoHandler();
  cookieInfo.init();

  if (window.objectFitImages !== undefined) {
    objectFitImages();
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvb2tpZWluZm9IYW5kbGVyLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkFncm9sa29ydGV0MlRoZW1lIiwiYXBwIiwiQ29va2llaW5mb0hhbmRsZXIiLCJjb29raWV3cmFwU2VsZWN0b3IiLCJjb29raWVjbGVhckJ0blNlbGVjdG9yIiwic2V0Iiwia2V5IiwidmFsdWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkb2N1bWVudCIsImNvb2tpZSIsImdldFZhbHVlIiwicmVnZXgiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibGVuZ3RoIiwiaW5pdCIsImhhc1Nob3duQmVmb3JlIiwid3JhcCIsIiQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYnRuIiwiYmluZFVJQWN0aW9ucyIsImNhbGwiLCJ0aGF0Iiwib24iLCJjbGVhck1lc3NhZ2UiLCJjb29raWVJbmZvIiwib2JqZWN0Rml0SW1hZ2VzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkJELE1BQU0sQ0FBQ0MsaUJBQVAsSUFBNEIsRUFBdkQ7O0FBRUMsV0FBVUMsR0FBVixFQUFlO0FBQ1o7O0FBRUFBLEVBQUFBLEdBQUcsQ0FBQ0MsaUJBQUosR0FBd0IsWUFBVztBQUMvQixRQUFJQyxrQkFBa0IsR0FBRyxvQkFBekI7QUFDQSxRQUFJQyxzQkFBc0IsR0FBRyw2QkFBN0I7O0FBRUEsUUFBSUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCO0FBQzNCRCxNQUFBQSxHQUFHLEdBQUdFLGtCQUFrQixDQUFDRixHQUFELENBQXhCO0FBQ0FDLE1BQUFBLEtBQUssR0FBR0Msa0JBQWtCLENBQUNELEtBQUQsQ0FBMUI7QUFFQUUsTUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCSixHQUFHLEdBQUcsR0FBTixHQUFZQyxLQUFaLEdBQW9CLElBQXBCLEdBQTJCLGdEQUE3QztBQUVBLGFBQU8sSUFBUDtBQUNILEtBUEQsQ0FKK0IsQ0FhL0I7OztBQUNBLFFBQUlJLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNMLEdBQVQsRUFBYztBQUN6QixVQUFHLFFBQU9BLEdBQVAsY0FBc0IsS0FBdEIsQ0FBSCxFQUFnQztBQUM1QixlQUFPLEtBQVA7QUFDSDs7QUFFRCxVQUFJTSxLQUFLLEdBQUcscUJBQXFCSixrQkFBa0IsQ0FBQ0YsR0FBRCxDQUF2QyxHQUErQyw2QkFBM0Q7QUFDQSxVQUFJQyxLQUFLLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkcsT0FBaEIsQ0FBd0IsSUFBSUMsTUFBSixDQUFXRixLQUFYLENBQXhCLEVBQTJDLElBQTNDLENBQVo7QUFDQUwsTUFBQUEsS0FBSyxHQUFHUSxrQkFBa0IsQ0FBQ1IsS0FBRCxDQUExQjtBQUVBLGFBQU9BLEtBQUssQ0FBQ1MsTUFBTixHQUFlLENBQWYsR0FBbUJULEtBQW5CLEdBQTJCLEtBQWxDO0FBQ0gsS0FWRDs7QUFZQSxTQUFLVSxJQUFMLEdBQVksWUFBVztBQUNuQixVQUFHLEtBQUtDLGNBQUwsT0FBMEIsS0FBN0IsRUFBb0M7QUFDaEMsYUFBS0MsSUFBTCxHQUFZQyxDQUFDLENBQUNqQixrQkFBRCxDQUFiO0FBQ0EsYUFBS2dCLElBQUwsQ0FBVUUsV0FBVixDQUFzQixXQUF0QjtBQUNBRCxRQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVFLFFBQVYsQ0FBbUIsd0JBQW5CO0FBQ0EsYUFBS0MsR0FBTCxHQUFZSCxDQUFDLENBQUNoQixzQkFBRCxDQUFiO0FBQ0FvQixRQUFBQSxhQUFhLENBQUNDLElBQWQsQ0FBbUIsSUFBbkI7QUFDSDtBQUNKLEtBUkQ7O0FBVUEsUUFBSUQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCLFVBQUlFLElBQUksR0FBRyxJQUFYO0FBQ0EsV0FBS0gsR0FBTCxDQUFTSSxFQUFULENBQVksT0FBWixFQUFxQixZQUFXO0FBQzVCRCxRQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCQyxJQUF2QjtBQUNBTixRQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLFdBQVYsQ0FBc0Isd0JBQXRCO0FBQ0gsT0FIRDtBQUlILEtBTkQsQ0FwQytCLENBNEMvQjs7O0FBQ0EsU0FBS0gsY0FBTCxHQUFzQixZQUFXO0FBQzdCLGFBQU9QLFFBQVEsQ0FBQyxnQkFBRCxDQUFSLEtBQStCLEdBQXRDO0FBQ0gsS0FGRDs7QUFJQSxTQUFLaUIsWUFBTCxHQUFvQixZQUFXO0FBQzNCLFdBQUtULElBQUwsQ0FBVUcsUUFBVixDQUFtQixXQUFuQjtBQUNBakIsTUFBQUEsR0FBRyxDQUFDLGdCQUFELEVBQW1CLEdBQW5CLENBQUg7QUFDSCxLQUhEO0FBSUgsR0FyREQ7QUFzREgsQ0F6REEsRUF5RENOLE1BQU0sQ0FBQ0MsaUJBekRSLENBQUQ7OztBQ0ZBLENBQUMsWUFBVztBQUNSOztBQUVBRCxFQUFBQSxNQUFNLENBQUNDLGlCQUFQLEdBQTJCRCxNQUFNLENBQUNDLGlCQUFQLElBQTRCLEVBQXZEO0FBRUEsTUFBSTZCLFVBQVUsR0FBRyxJQUFJOUIsTUFBTSxDQUFDQyxpQkFBUCxDQUF5QkUsaUJBQTdCLEVBQWpCO0FBQ0EyQixFQUFBQSxVQUFVLENBQUNaLElBQVg7O0FBRUEsTUFBSWxCLE1BQU0sQ0FBQytCLGVBQVAsS0FBMkJDLFNBQS9CLEVBQTBDO0FBQ3RDRCxJQUFBQSxlQUFlO0FBQ2xCO0FBQ0osQ0FYRCIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuQWdyb2xrb3J0ZXQyVGhlbWUgPSB3aW5kb3cuQWdyb2xrb3J0ZXQyVGhlbWUgfHwge307XG5cbihmdW5jdGlvbiAoYXBwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYXBwLkNvb2tpZWluZm9IYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb29raWV3cmFwU2VsZWN0b3IgPSAnLmNvb2tpZWluZm9ybWF0aW9uJztcbiAgICAgICAgdmFyIGNvb2tpZWNsZWFyQnRuU2VsZWN0b3IgPSAnLmNvb2tpZWluZm9ybWF0aW9uLWNsZWFyYnRuJztcblxuICAgICAgICB2YXIgc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgJzsgJyArICdleHBpcmVzPUZyaSwgMzEgRGVjIDk5OTkgMjM6NTk6NTkgR01UOyBwYXRoPS87JztcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR2V0cyBhIGNvb2tpZSBhbmQgcmV0dXJucyBpdHMgdmFsdWVcbiAgICAgICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZih0eXBlb2Yga2V5ICE9PSB0eXBlb2YgJ3N0cicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciByZWdleCA9ICcoPzooPzpefC4qO1xcXFxzKiknICsgZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnXFxcXHMqXFxcXD1cXFxccyooW147XSopLiokKXxeLiokJztcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRvY3VtZW50LmNvb2tpZS5yZXBsYWNlKG5ldyBSZWdFeHAocmVnZXgpLCAnJDEnKTtcbiAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDAgPyB2YWx1ZSA6IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYodGhpcy5oYXNTaG93bkJlZm9yZSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcCA9ICQoY29va2lld3JhcFNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXAucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFzLWNvb2tpZS1pbmZvcm1hdGlvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuICA9ICQoY29va2llY2xlYXJCdG5TZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgYmluZFVJQWN0aW9ucy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBiaW5kVUlBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmJ0bi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGF0LmNsZWFyTWVzc2FnZS5jYWxsKHRoYXQpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLWNvb2tpZS1pbmZvcm1hdGlvbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmV0dXJucyB0cnVlIGlmIGNvb2tpZSBpbmZvcm1hdGlvbiBoYXMgYmVlbiBzaG93biBiZWZvcmVcbiAgICAgICAgdGhpcy5oYXNTaG93bkJlZm9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKCdoYXNzaG93bmNvb2tpZScpID09PSAnMSc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMud3JhcC5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICBzZXQoJ2hhc3Nob3duY29va2llJywgJzEnKTtcbiAgICAgICAgfTtcbiAgICB9O1xufSh3aW5kb3cuQWdyb2xrb3J0ZXQyVGhlbWUpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHdpbmRvdy5BZ3JvbGtvcnRldDJUaGVtZSA9IHdpbmRvdy5BZ3JvbGtvcnRldDJUaGVtZSB8fCB7fTtcblxuICAgIHZhciBjb29raWVJbmZvID0gbmV3IHdpbmRvdy5BZ3JvbGtvcnRldDJUaGVtZS5Db29raWVpbmZvSGFuZGxlcigpO1xuICAgIGNvb2tpZUluZm8uaW5pdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5vYmplY3RGaXRJbWFnZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvYmplY3RGaXRJbWFnZXMoKTtcbiAgICB9XG59KSgpO1xuIl19
