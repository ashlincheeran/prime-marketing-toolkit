/* @ds-bundle: {"format":4,"namespace":"PRIMEDesignSystem_b50bf6","components":[{"name":"AgentCard","sourcePath":"components/core/AgentCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"LocationTag","sourcePath":"components/core/LocationTag.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"StatRow","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/AgentCard.jsx":"57486a45d5e4","components/core/Button.jsx":"fb915be8b422","components/core/Divider.jsx":"4e2e65fd13f3","components/core/LocationTag.jsx":"7dee408fb51c","components/core/SectionLabel.jsx":"955fd1e13458","components/core/Stat.jsx":"5e94fc3a3eef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PRIMEDesignSystem_b50bf6 = window.PRIMEDesignSystem_b50bf6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AgentCard.jsx
try { (() => {
function AgentCard({
  name,
  photoSrc,
  kicker = 'Exclusively brought to the market by'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--fg-on-dark-3)'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--surface-dark-raised)',
      border: '1px solid var(--line-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, photoSrc ? /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--fg-on-dark-2)'
    }
  }, name.split(' ').map(w => w[0]).join(''))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--fg-on-dark-1)'
    }
  }, name));
}
Object.assign(__ds_scope, { AgentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AgentCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...rest
}) {
  const [state, setState] = React.useState('rest');
  const bg = variant === 'primary' ? state === 'press' ? 'var(--accent-press)' : state === 'hover' ? 'var(--accent-hover)' : 'var(--accent)' : state === 'hover' || state === 'press' ? 'rgba(255,255,255,0.10)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('press'),
    onMouseUp: () => setState('hover'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 12 : 13,
      fontWeight: 400,
      letterSpacing: '0.06em',
      color: variant === 'primary' ? '#fff' : 'var(--fg-on-dark-1)',
      background: bg,
      border: variant === 'ghost' ? '1px solid var(--line-on-dark)' : 'none',
      borderRadius: 'var(--radius-sm)',
      padding: size === 'sm' ? '8px 22px' : '11px 34px',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-luxe)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  variant = 'hairline',
  style
}) {
  if (variant === 'spine') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: 'var(--prime-copper)',
        alignSelf: 'stretch',
        minHeight: 40,
        margin: '0 auto',
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--line-on-dark)',
      margin: 0,
      width: '100%',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/LocationTag.jsx
try { (() => {
function LocationTag({
  children,
  withPin = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--prime-copper)'
    }
  }, withPin && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1em'
    }
  }, children));
}
Object.assign(__ds_scope, { LocationTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LocationTag.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  children,
  tone = 'muted',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tone === 'copper' ? 'var(--prime-copper)' : 'var(--fg-on-dark-3)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function Stat({
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--fg-on-dark-2)'
    },
    className: "prime-stat-icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-on-dark-2)'
    }
  }, label));
}
function StatRow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'center',
      background: 'var(--surface-dark-raised)',
      border: '1px solid var(--line-on-dark)'
    }
  }, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement(React.Fragment, null, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: 'var(--line-on-dark)',
      margin: '8px 0'
    }
  }), child)));
}
Object.assign(__ds_scope, { Stat, StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgentCard = __ds_scope.AgentCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.LocationTag = __ds_scope.LocationTag;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatRow = __ds_scope.StatRow;

})();
