import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    /** Height applied as inline style, e.g. "70vh", "calc(100% - 60px)".
     *  When omitted, height is auto (content-driven).
     *  Only used when `snapPoints` is NOT provided. */
    height?: string;
    /** If true, `height` is applied as maxHeight instead of height. Default: false.
     *  Only used when `snapPoints` is NOT provided. */
    heightIsMax?: boolean;
    /** Where swipe-to-dismiss is detected.
     *  "header" = only the drag handle + BottomSheet.Header area.
     *  "sheet"  = entire sheet, scroll-aware (blocks drag when inner content is scrolled).
     *  Default: "sheet" */
    swipeTarget?: 'header' | 'sheet';
    /** Extra class name applied to the sheet container div. */
    className?: string;
    /** z-index of the root overlay. Default: 2000 */
    zIndex?: number;
    /** Snap point fractions of viewport height (0-1), e.g. [0.3, 0.6, 1.0].
     *  Sorted ascending internally. When provided, the sheet opens at the
     *  `defaultSnapPoint` height and snaps between these positions on drag. */
    snapPoints?: number[];
    /** Index into `snapPoints` for the initial snap position. Default: 0 */
    defaultSnapPoint?: number;
    /** Called when the sheet settles at a snap point. */
    onSnap?: (index: number, snapValue: number) => void;
}
declare function BottomSheetInner({ isOpen, onClose, children, height, heightIsMax, swipeTarget, className, zIndex, snapPoints: snapPointsProp, defaultSnapPoint, onSnap, }: BottomSheetProps): react_jsx_runtime.JSX.Element | null;
/** Wrap your header content in this to make it the drag target when swipeTarget="header" */
declare function Header({ children, className, style }: {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}): react_jsx_runtime.JSX.Element;
declare const BottomSheet: typeof BottomSheetInner & {
    Header: typeof Header;
};

export { BottomSheet, type BottomSheetProps };
