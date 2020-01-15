import {StyleSheet} from 'react-native';
import Util from "../lib/Util";

export const GRADIENT_START_COLOR = '#006dff'
export const GRADIENT_END_COLOR = '#00acfa'
export const ZP_COLOR_BORDER = '#E3E6E7';
export const ZP_COLOR_TEXT_MAIN = '#24272B';
export const ZP_COLOR_TEXT_SUB = '#ACB3BA';
export const ZP_COLOR_TITLE = '#727f8c';
export const ZP_COLOR_TEXT_WARNING = '#d49c05';
export const ZP_COLOR_TEXT_DANGEROUS = 'red';
export const ZP_COLOR_RADIO_OUTER = '#c7c7cc';
export const ZP_COLOR_SUB_NAVIGATE = '#c7c7cc';
export const ZP_BUTTON_BG_PRICE_COLOR = '#f0f4f6';
export const ZP_BG_INFO = '#f0f4f6';
export const BG_COLOR = '#006dff';
export const BG_COLOR_OPACITY_10 = '#006dff10'
export const BTN_COLOR = '#006dff';
export const TRANSPARENT = 'transparent';
export const BAR_COLOR = '#4e4d52';
export const TEXT_COLOR = '#e5dbda';
export const HEADER_TEXT_COLOR = '#FFFFFF';
export const STATUS_BAR_HEIGHT = 24; // ios header height = HEADER_HEIGHT + STATUS_BAR_HEIGHT
export const HEADER_HEIGHT = Util.isAndroid() ? 62 : (Util.isiPhoneX() ? 64 : 45) + STATUS_BAR_HEIGHT;
export const HEADER_PADDING = Util.isAndroid() ? 12 : 10;
export const HEADER_TEXT_SIZE = 18;
export const HEADER_TEXT_ACTION_SIZE = Util.isAndroid() ? 13 : 14;
export const ALIGNHEADER = Util.isAndroid() ? 'flex-start' : 'center';
export const HEADER_TEXT_WEIGHT = 'bold';
export const MAIN_TEXT_SIZE = Util.isAndroid() ? 14 : 16;
export const BLACK = '#24272b';
export const RED = '#ff3c30';
export const ZP_COLOR_RED = '#ff7f75';
export const GREEN = 'green';
export const LIME_GREEN = 'limegreen';
export const BLUE = 'blue';
export const YELLOW = 'yellow';
export const WHITE = '#FFFFFF';
export const SUB_TEXT_SIZE = 13;
export const GREY = '#C7CAD3';
export const BG_GREY = '#EDF0F5';
export const ZP_COLOR_DISABLE_BUTTON = '#C7CAD3';
export const LIST_ITEM_CONTAINER_HEIGHT = 56;
export const ICON_WIDTH = 30;
export const ICON_HEIGHT = 30;
export const TEXT_ALIGHT = Util.isAndroid() ? 'flex-start' : 'center';
export const MUTED_COLOR = '#8e8786';
export const LINK_COLOR = '#48e9d9';
export const ARROW_COLOR = '#727f8c';
export const FILTER_COLOR = '#f8f8f8';
export const ACCENT_COLORS = ['#d31d65', '#751c53', '#c248c0', '#7d6e8b', '#bbc6f7'];
export const SMALL_FONT_SIZE = 10;
export const TINY_FONT_SIZE = 8;
export const AVERAGE_FONT_SIZE = Util.isAndroid() ? 15 : 20;
export const BUTTON_FONT_SIZE = 18;
export const INFO_FONT_SIZE = 13;
export const ICON_SIZE = Util.isAndroid() ? 24 : 26;
export const FONT_FAMILY = /*'System'*/ Util.isAndroid() ? 'Roboto' : 'System';
export const BACK_ICON_NAME = Util.isAndroid() ? 'backandroid' : 'backios';
export const DEPARTURE_LABEL = "Chọn điểm đi";
export const RETURN_LABEL = "Chọn điểm đến";
export const INPUT_FIELD_HEIGHT = 60;
export const ZP_BUTTON_HEIGHT = Util.isiPhoneX() ? 80 : 54;
export const ZP_BUTTON_MARGIN = 46;
export const ZP_BUTTON_RADIUS = Util.isiPhoneX() ? 0 : 3;
export const ZP_BUTTON_MARGIN_BOTTOM = Util.isiPhoneX() ? 0 : 10;
export const ZP_PADDING = 12;
export const HIT_SLOP = {top: 10, bottom: 10, left: 10, right: 10};
export const TICKET_HEIGHT_2WAY = 237;
export const TICKET_HEIGHT_1WAY = 190;
export const BOOKING_HEIGHT_2WAY = 190;
export const BOOKING_HEIGHT_1WAY = 150;
export const BUTTON_HEIGHT_BOTTOM = Util.isiPhoneX() ? 80 : 55;

export const FLEX_DIRECTION_ROW = 'row';
export const FLEX_DIRECTION_COLUMN = 'column';
export const JUSTIFY_CONTENT_SPACE_AROUND = 'space-around';
export const JUSTIFY_CONTENT_SPACE_BETWEEN = 'space-between';

export const FORMAT_DATETIME_DATA = "DD/MM/YYYY";
export const FORMAT_DATETIME_DATA_TIME = "DD/MM/YYYY HH:mm";
export const FORMAT_DATETIME_TIME = "HH:mm";
export const GOTADI_FORMAT_DATETIME_DATA = "YYYY-MM-DD";

export const BORDER_PIXEL = 0.7;

export const INPUT_KEY_REFS_CONTACT_FULL_NAME = 'ContactFullNameInput';
export const INPUT_KEY_REFS_CONTACT_EMAIL = 'ContactEmailInput';
export const INPUT_KEY_REFS_CONTACT_PHONE = 'ContactPhoneInput';


export const AIRLINE_LOGO_STYLE = {
	width: 40,
	height: 32,
	alignSelf: 'center'
};
export const MONEY_STYLE = {
	fontWeight: 'bold',
	fontFamily: FONT_FAMILY,
	fontSize: 16,
	fontStyle: "normal",
	textAlign: "right",
	color: BLACK
};

export const LIST_ITEM_STYLE = {
	backgroundColor: '#fff',
	borderWidth: 0,
	borderColor: MUTED_COLOR
};
export const COMMON_STYLES = StyleSheet.create({
	pageContainer: {
		backgroundColor: BG_COLOR,
		flex: 1,
		marginTop: 0,
		paddingTop: 20,
		marginBottom: 48,
		marginHorizontal: 0,
		paddingHorizontal: 10
	},
	buttonEnable: {
		flex: 1,
		borderRadius: ZP_BUTTON_RADIUS,
		alignSelf: 'center',
		justifyContent: 'center',
		height: 54,
		backgroundColor: BG_COLOR
	},
	buttonDisable: {
		flex: 1,
		borderRadius: ZP_BUTTON_RADIUS,
		alignItems: 'center',
		justifyContent: 'center',
		height: 54,
		backgroundColor: '#c7c7cc'
	},
	textButton: {
		textAlign: 'center',
		fontSize: 18,
		color: '#ffffff'
	},
	text: {
		color: TEXT_COLOR,
		fontFamily: 'Helvetica Neue'
	}
});

export const ICON_CONTAINER = {
	paddingTop: Util.isAndroid() ? 5 : 0,
	paddingLeft: 5,
	paddingRight: 5,
};


export const PASSENGER_CONTAINER_STYLE = {
	color: ZP_COLOR_TEXT_SUB,
	fontWeight: 'normal',
	marginLeft: 5,
	marginRight: 5,
	padding: 0
};

export const checkIcon = {
	name: 'check',
	size: ICON_SIZE,
	style: {
		color: BG_COLOR,
		fontWeight: 'normal'
	},
	containerStyle: ICON_CONTAINER
};

export const arrow1Way = {
	name: 'arrow_1way',
	size: ICON_SIZE,
	style: {
		color: ZP_COLOR_TITLE,
		fontWeight: 'normal',
		paddingTop: Util.isAndroid() ? 5 : 0,
		paddingLeft: 5,
		paddingRight: 5
	},
	containerStyle: ICON_CONTAINER
};
