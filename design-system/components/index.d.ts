import type * as React from 'react';

type Node = React.ReactNode;
export type Audience = 'young-people' | 'parents-carers' | 'schools' | 'social-workers' | 'professionals';
export type BrandTone = 'teal' | 'yellow' | 'coral' | 'purple' | 'navy' | 'pale';
export type IconName = 'arrow-right' | 'arrow-left' | 'arrow-up' | 'chevron-down' | 'chevron-up' | 'chevron-right' | 'chevron-left' | 'search' | 'menu' | 'close' | 'plus' | 'minus' | 'phone' | 'mail' | 'document' | 'clipboard' | 'calendar' | 'clock' | 'map-pin' | 'user' | 'users' | 'star' | 'heart' | 'book' | 'school' | 'graduation' | 'transition' | 'alert' | 'warning' | 'info' | 'check' | 'check-circle' | 'external' | 'download' | 'print' | 'share' | 'copy' | 'filter' | 'play' | 'quote' | 'compass' | 'sun' | 'sprout' | 'lock' | 'home' | 'message' | 'baby' | 'briefcase' | 'eye' | 'eye-off' | 'palette' | 'speech' | 'map' | 'key';
interface LinkItem { label: string; href: string }

/* Brand & visual language */
export interface LogoProps { variant?: 'primary' | 'stacked' | 'horizontal' | 'mark' | 'one-colour' | 'app-icon'; reversed?: boolean; height?: number; href?: string; alt?: string; src?: string; assetBase?: string; homeLabel?: string; className?: string }
export declare function Logo(props: LogoProps): React.ReactElement;
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; title?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export interface IconBadgeProps { icon: IconName; tone?: BrandTone | 'error' | 'success'; size?: 'sm' | 'md' | 'lg'; shape?: 'circle' | 'square'; label?: string; className?: string }
export declare function IconBadge(props: IconBadgeProps): React.ReactElement;
export interface BrandPatternProps { rows?: number; cols?: number; unit?: number; gap?: number; seed?: number; tones?: BrandTone[]; width?: string | number; height?: string | number; className?: string }
export declare function BrandPattern(props: BrandPatternProps): React.ReactElement;
export interface SectionDividerProps { variant?: 'hills' | 'pattern' | 'rule'; height?: number; flip?: boolean; seed?: number; className?: string }
export declare function SectionDivider(props: SectionDividerProps): React.ReactElement;
export interface IllustrationProps { name?: 'home' | 'children' | 'parents-carers' | 'schools'; src?: string; alt?: string; variant?: 'frame' | 'circle' | 'bleed'; audience?: Audience; caption?: Node; className?: string }
export declare function Illustration(props: IllustrationProps): React.ReactElement;
export interface CtaBannerProps { title: string; text?: string; action?: LinkItem; icon?: IconName; variant?: 'brand' | 'navy' | 'ending'; decoration?: boolean; headingLevel?: number; id?: string; className?: string }
export declare function CtaBanner(props: CtaBannerProps): React.ReactElement;

/* Core */
export interface ButtonProps { variant?: 'primary' | 'secondary' | 'secondary-dark' | 'warning' | 'inverse' | 'tertiary'; size?: 'sm' | 'md' | 'lg'; icon?: IconName; iconPosition?: 'start' | 'end'; href?: string; type?: 'button' | 'submit' | 'reset'; loading?: boolean; loadingLabel?: string; disabled?: boolean; fullWidth?: boolean; onClick?: (e: React.MouseEvent) => void; name?: string; value?: string; form?: string; 'data-autofocus'?: boolean; children?: Node; className?: string }
export declare function Button(props: ButtonProps): React.ReactElement;
export interface ButtonGroupProps { children?: Node; className?: string }
export declare function ButtonGroup(props: ButtonGroupProps): React.ReactElement;
export interface LinkProps { href: string; variant?: 'default' | 'arrow' | 'inverse' | 'no-underline'; external?: boolean; current?: boolean; onClick?: (e: React.MouseEvent) => void; children?: Node; className?: string }
export declare function Link(props: LinkProps): React.ReactElement;
export interface TagProps { tone?: 'neutral' | 'teal' | 'success' | 'yellow' | 'coral' | 'purple' | 'navy' | 'error'; children?: Node; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;
export interface HeaderProps { navigation?: (LinkItem & { active?: boolean })[]; search?: boolean; searchOpen?: boolean; onSearch?: (q: string) => void; searchAction?: string; logoHref?: string; logoHeight?: number; className?: string }
export declare function Header(props: HeaderProps): React.ReactElement;
export interface FooterProps { links?: LinkItem[]; partner?: Node; copyright?: string; logoHref?: string; children?: Node; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;
export interface BreadcrumbsProps { items: { label: string; href?: string }[]; inverse?: boolean; className?: string }
export declare function Breadcrumbs(props: BreadcrumbsProps): React.ReactElement;
export interface HeroProps { title: string; eyebrow?: string; lead?: string; actions?: Node; illustration?: { name?: 'home' | 'children' | 'parents-carers' | 'schools'; src?: string; alt?: string; width?: number; height?: number }; audience?: Audience; breadcrumbs?: { label: string; href?: string }[]; variant?: 'default' | 'home' | 'compact'; patternSeed?: number; className?: string }
export declare function Hero(props: HeroProps): React.ReactElement;
export interface GridProps { min?: string; gap?: string; as?: 'div' | 'ul'; children?: Node; className?: string }
export declare function Grid(props: GridProps): React.ReactElement;
export interface CardProps { title: string; href?: string; external?: boolean; text?: string; icon?: IconName; iconTone?: BrandTone; iconStyle?: 'badge' | 'plain'; variant?: 'outlined' | 'tinted' | 'plain'; audience?: Audience; tag?: Node; meta?: string; image?: { src: string; alt?: string }; linkLabel?: string | false; headingLevel?: number; as?: 'div' | 'li' | 'article'; children?: Node; className?: string }
export declare function Card(props: CardProps): React.ReactElement;
export interface SignpostProps { title: string; text?: string; href?: string; linkLabel?: string; icon?: IconName; iconTone?: BrandTone; iconSize?: number; headingLevel?: number; children?: Node; className?: string }
export declare function Signpost(props: SignpostProps): React.ReactElement;
export interface PanelProps { tone?: 'info' | 'pep' | 'help' | 'advice' | 'neutral' | 'warning'; title?: string; icon?: IconName | null; actions?: Node; headingLevel?: number; label?: string; as?: 'section' | 'div' | 'aside'; children?: Node; className?: string }
export declare function Panel(props: PanelProps): React.ReactElement;
export interface ContactPanelProps { title?: string; address?: string | string[]; phone?: string; phoneHours?: string; email?: string; contactHref?: string; variant?: 'stacked' | 'inline'; headingLevel?: number; className?: string }
export declare function ContactPanel(props: ContactPanelProps): React.ReactElement;
export interface ProseProps { html?: string; children?: Node; className?: string }
export declare function Prose(props: ProseProps): React.ReactElement;

/* Navigation & discovery */
export interface AudienceSelectorProps { audiences: { id: Audience; label: string; description?: string; href: string; icon?: IconName }[]; variant?: 'cards' | 'pills'; current?: Audience; heading?: string; headingLevel?: number; label?: string; className?: string }
export declare function AudienceSelector(props: AudienceSelectorProps): React.ReactElement;
export interface QuickLinksProps { links: (LinkItem & { icon?: IconName; meta?: string; external?: boolean })[]; heading?: string; headingLevel?: number; variant?: 'default' | 'panel'; columns?: number; emptyText?: string; label?: string; className?: string }
export declare function QuickLinks(props: QuickLinksProps): React.ReactElement;
export interface OnThisPageProps { items: { id: string; label: string }[]; heading?: string; sticky?: boolean; trackActive?: boolean; activeId?: string; className?: string }
export declare function OnThisPage(props: OnThisPageProps): React.ReactElement;
export interface PaginationProps { page?: number; total?: number; hrefFor?: (page: number) => string; onChange?: (page: number) => void; variant?: 'numbered' | 'prev-next'; prev?: LinkItem; next?: LinkItem; label?: string; className?: string }
export declare function Pagination(props: PaginationProps): React.ReactElement | null;
export interface BackToTopProps { href?: string; threshold?: number; alwaysVisible?: boolean; fixed?: boolean; children?: Node }
export declare function BackToTop(props: BackToTopProps): React.ReactElement;
export interface AzIndexProps { groups: { letter: string; items: { label: string; href: string; description?: string }[] }[]; label?: string; idPrefix?: string; className?: string }
export declare function AzIndex(props: AzIndexProps): React.ReactElement;
export interface SearchInputProps { label?: string; hideLabel?: boolean; placeholder?: string; defaultValue?: string; name?: string; action?: string; onSubmit?: (q: string) => void; size?: 'default' | 'large'; inverse?: boolean; className?: string }
export declare function SearchInput(props: SearchInputProps): React.ReactElement;
export interface SearchResultsProps { query?: string; results?: { title: string; href: string; summary?: string; type?: string; updated?: string }[]; total?: number; loading?: boolean; error?: boolean; onRetry?: () => void; emptyText?: Node; className?: string }
export declare function SearchResults(props: SearchResultsProps): React.ReactElement;
export interface FilterPanelProps { groups: { id: string; legend: string; open?: boolean; options: { value: string; label: string; count?: number }[] }[]; selected?: Record<string, string[]>; defaultSelected?: Record<string, string[]>; onChange?: (s: Record<string, string[]>) => void; sortOptions?: { value: string; label: string }[]; sort?: string; onSortChange?: (v: string) => void; heading?: string; className?: string }
export declare function FilterPanel(props: FilterPanelProps): React.ReactElement;

export interface SectionNavProps { items: { label: string; href: string; current?: boolean; children?: { label: string; href: string; current?: boolean }[] }[]; title?: string; titleHref?: string; audience?: Audience; label?: string; className?: string }
export declare function SectionNav(props: SectionNavProps): React.ReactElement;

/* Content presentation */
export interface QuoteProps { children: Node; cite?: string; role?: string; variant?: 'testimonial' | 'student-voice' | 'pull'; label?: string; image?: { src: string }; className?: string }
export declare function Quote(props: QuoteProps): React.ReactElement;
export interface StatsPanelProps { stats: { value: string; label: string; description?: string }[]; heading?: string; source?: Node; variant?: 'default' | 'navy'; className?: string }
export declare function StatsPanel(props: StatsPanelProps): React.ReactElement;
export interface TimelineProps { items: { date?: string; title: string; text?: string; status?: 'done' | 'current' | 'upcoming' }[]; label?: string; className?: string }
export declare function Timeline(props: TimelineProps): React.ReactElement;
export interface KeyFactsProps { items: { term: Node; value: Node }[]; title?: string; icon?: IconName; variant?: 'panel' | 'list'; className?: string }
export declare function KeyFacts(props: KeyFactsProps): React.ReactElement;
export interface TableProps { columns: { key: string; label: string; numeric?: boolean }[]; rows: Record<string, Node | boolean>[]; caption?: string; variant?: 'default' | 'comparison'; striped?: boolean; firstColumnHeader?: boolean; className?: string }
export declare function Table(props: TableProps): React.ReactElement;
export interface ContentMetaProps { published?: string; updated?: string; reviewed?: string; nextReview?: string; owner?: string; format?: string; updateNotice?: { date: string; text: Node }; className?: string }
export declare function ContentMeta(props: ContentMetaProps): React.ReactElement;
export interface VideoEmbedProps { title: string; videoId?: string; src?: string; thumbnail?: string; duration?: string; transcriptHref?: string; consentText?: string; className?: string }
export declare function VideoEmbed(props: VideoEmbedProps): React.ReactElement;
export interface MapEmbedProps { title?: string; address?: string | string[]; query?: string; lat?: number; lng?: number; src?: string; directionsHref?: string; consentText?: string; className?: string }
export declare function MapEmbed(props: MapEmbedProps): React.ReactElement;
export interface AccordionProps { items: { heading: string; summary?: string; content: Node; open?: boolean }[]; showAll?: boolean; headingLevel?: number; className?: string }
export declare function Accordion(props: AccordionProps): React.ReactElement;
export interface DetailsProps { summary: string; open?: boolean; children?: Node; className?: string }
export declare function Details(props: DetailsProps): React.ReactElement;
export interface EditorialFeatureProps { title: string; eyebrow?: string; text?: string; image?: { src: string; alt?: string }; href?: string; linkLabel?: string; variant?: 'feature' | 'case-study'; facts?: { term: string; value: string }[]; quote?: string; reverse?: boolean; audience?: Audience; headingLevel?: number; patternSeed?: number; className?: string }
export declare function EditorialFeature(props: EditorialFeatureProps): React.ReactElement;
export interface DocumentLinkProps { title: string; href: string; fileType?: string; fileSize?: string; pages?: number; description?: string; updated?: string; download?: boolean; accessibleHref?: string; variant?: 'card' | 'compact'; className?: string }
export declare function DocumentLink(props: DocumentLinkProps): React.ReactElement;

/* Education patterns */
export interface StepsProps { steps: { title: string; label?: string; text?: string; items?: string[]; href?: string; linkLabel?: string; icon?: IconName }[]; variant?: 'vertical' | 'journey'; current?: number; heading?: string; intro?: string; headingLevel?: number; className?: string }
export declare function Steps(props: StepsProps): React.ReactElement;
export interface ChecklistProps { items: { id: string; label: string; hint?: string; done?: boolean }[]; heading?: string; interactive?: boolean; onChange?: (done: Record<string, boolean>) => void; headingLevel?: number; className?: string }
export declare function Checklist(props: ChecklistProps): React.ReactElement;
export interface KeyDatesProps { dates: { date: string; label: string; detail?: string; href?: string }[]; heading?: string; highlightNext?: boolean; today?: string; className?: string }
export declare function KeyDates(props: KeyDatesProps): React.ReactElement;
export interface EventCardProps { title: string; date: string; href?: string; time?: string; location?: string; format?: 'online' | 'in-person'; audience?: string; text?: string; status?: 'open' | 'few' | 'full' | 'closed' | 'recording'; headingLevel?: number; className?: string }
export declare function EventCard(props: EventCardProps): React.ReactElement;

/* Interactive patterns */
export interface TabsProps { tabs: { id: string; label: string; content: Node }[]; defaultTab?: string; label?: string; title?: string; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
interface FieldProps { id?: string; name?: string; label: Node; hint?: Node; error?: string; optional?: boolean; disabled?: boolean; labelSize?: 's' | 'l'; className?: string }
export interface TextInputProps extends FieldProps { type?: string; inputMode?: string; autoComplete?: string; spellCheck?: boolean; width?: '20' | '10' | '5' | '4' | '2'; multiline?: boolean; rows?: number; prefix?: string; suffix?: string; required?: boolean; value?: string; defaultValue?: string; placeholder?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }
export declare function TextInput(props: TextInputProps): React.ReactElement;
export interface PasswordInputProps extends FieldProps { autoComplete?: 'current-password' | 'new-password'; value?: string; defaultValue?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }
export declare function PasswordInput(props: PasswordInputProps): React.ReactElement;
export interface SelectProps extends FieldProps { options: { value: string; label: string; disabled?: boolean }[]; value?: string; defaultValue?: string; onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void }
export declare function Select(props: SelectProps): React.ReactElement;
export interface ChoiceGroupProps { type?: 'radio' | 'checkbox'; name?: string; legend: Node; legendSize?: 'm' | 'l'; hint?: Node; error?: string; options: ({ value: string; label: Node; hint?: Node; disabled?: boolean } | { divider: string })[]; value?: string | string[]; defaultValue?: string | string[]; onChange?: (v: string | string[]) => void; inline?: boolean; size?: 'default' | 'small'; className?: string }
export declare function ChoiceGroup(props: ChoiceGroupProps): React.ReactElement;
export interface SelectableCardProps { type?: 'radio' | 'checkbox'; name?: string; legend: Node; hint?: Node; error?: string; options: { value: string; title: string; description?: string; icon?: IconName; tone?: BrandTone; disabled?: boolean; audience?: Audience }[]; value?: string | string[]; defaultValue?: string | string[]; onChange?: (v: string | string[]) => void; min?: string; className?: string }
export declare function SelectableCard(props: SelectableCardProps): React.ReactElement;
export interface ErrorSummaryProps { errors: { href: string; text: string }[]; title?: string; autoFocus?: boolean }
export declare function ErrorSummary(props: ErrorSummaryProps): React.ReactElement | null;
export interface ProgressIndicatorProps { steps?: string[]; current?: number; total?: number; stepLabel?: string; variant?: 'steps' | 'bar' }
export declare function ProgressIndicator(props: ProgressIndicatorProps): React.ReactElement;
export interface DialogProps { open: boolean; onClose?: () => void; title: string; children?: Node; actions?: Node; size?: 'sm' | 'md' | 'lg'; alert?: boolean; dismissible?: boolean; inline?: boolean }
export declare function Dialog(props: DialogProps): React.ReactElement | null;
export interface PageActionsProps { actions?: ('copy' | 'share' | 'print')[]; url?: string; title?: string; copyText?: string; copyLabel?: string; className?: string }
export declare function PageActions(props: PageActionsProps): React.ReactElement;

export interface TermProps { children: Node; definition: Node; expansion?: string }
export declare function Term(props: TermProps): React.ReactElement;
export interface GlossaryProps { terms: { term: string; expansion?: string; definition: Node; href?: string; linkLabel?: string }[]; heading?: string; headingLevel?: number; searchable?: boolean; searchLabel?: string; askHref?: string; className?: string }
export declare function Glossary(props: GlossaryProps): React.ReactElement;
export interface ExplainerProps { question: string; answer: string; points?: { icon?: IconName; text: string }[]; icon?: IconName; tone?: BrandTone; audience?: Audience; video?: VideoEmbedProps; href?: string; linkLabel?: string; headingLevel?: number; id?: string; className?: string }
export declare function Explainer(props: ExplainerProps): React.ReactElement;
export interface TeamProfileProps { role: string; name?: string; pronouns?: string; photo?: string; remit?: string; covers?: string[]; bio?: Node; email?: string; audience?: Audience; variant?: 'default' | 'compact'; headingLevel?: number; className?: string }
export declare function TeamProfile(props: TeamProfileProps): React.ReactElement;
export interface PupilCardProps { href: string; title: string; text?: string; icon?: IconName; tone?: 'teal' | 'yellow' | 'coral' | 'purple'; className?: string }
export declare function PupilCard(props: PupilCardProps): React.ReactElement;
export interface PageFeedbackProps { state?: 'ask' | 'thanks' | 'form'; onAnswer?: (a: 'yes' | 'no') => void; onSubmit?: () => void; className?: string }
export declare function PageFeedback(props: PageFeedbackProps): React.ReactElement;

/* Feedback & states */
export interface NotificationBannerProps { tone?: 'info' | 'important' | 'success' | 'emergency' | 'maintenance' | 'status'; title?: string; label?: string; dismissible?: boolean; onDismiss?: () => void; children?: Node; className?: string }
export declare function NotificationBanner(props: NotificationBannerProps): React.ReactElement | null;
export interface ConfirmationPanelProps { title?: string; reference?: string; referenceLabel?: string; children?: Node; className?: string }
export declare function ConfirmationPanel(props: ConfirmationPanelProps): React.ReactElement;
export interface StateMessageProps { state?: 'empty' | 'error' | 'loading' | 'success' | 'info'; title?: string; children?: Node; action?: Node; skeleton?: number; compact?: boolean; icon?: IconName; className?: string }
export declare function StateMessage(props: StateMessageProps): React.ReactElement;

/* Utility */
export interface SkipLinkProps { href?: string; children?: Node }
export declare function SkipLink(props: SkipLinkProps): React.ReactElement;
export interface CookieBannerProps { serviceName?: string; onAccept?: () => void; onReject?: () => void; settingsHref?: string; state?: 'ask' | 'accepted' | 'rejected' | 'hidden'; sticky?: boolean; className?: string }
export declare function CookieBanner(props: CookieBannerProps): React.ReactElement | null;

declare global {
  interface Window {
    RVS: {
      Logo: typeof Logo; Icon: typeof Icon; IconBadge: typeof IconBadge; BrandPattern: typeof BrandPattern; SectionDivider: typeof SectionDivider; Illustration: typeof Illustration; CtaBanner: typeof CtaBanner;
      Button: typeof Button; ButtonGroup: typeof ButtonGroup; Link: typeof Link; Tag: typeof Tag; Header: typeof Header; Footer: typeof Footer; Breadcrumbs: typeof Breadcrumbs; Hero: typeof Hero; Grid: typeof Grid; Card: typeof Card; Signpost: typeof Signpost; Panel: typeof Panel; ContactPanel: typeof ContactPanel; Prose: typeof Prose;
      AudienceSelector: typeof AudienceSelector; QuickLinks: typeof QuickLinks; OnThisPage: typeof OnThisPage; Pagination: typeof Pagination; BackToTop: typeof BackToTop; AzIndex: typeof AzIndex; SectionNav: typeof SectionNav; SearchInput: typeof SearchInput; SearchResults: typeof SearchResults; FilterPanel: typeof FilterPanel;
      Quote: typeof Quote; StatsPanel: typeof StatsPanel; Timeline: typeof Timeline; KeyFacts: typeof KeyFacts; Table: typeof Table; ContentMeta: typeof ContentMeta; VideoEmbed: typeof VideoEmbed; MapEmbed: typeof MapEmbed; Accordion: typeof Accordion; Details: typeof Details; EditorialFeature: typeof EditorialFeature; DocumentLink: typeof DocumentLink;
      Steps: typeof Steps; Checklist: typeof Checklist; KeyDates: typeof KeyDates; EventCard: typeof EventCard;
      Tabs: typeof Tabs; TextInput: typeof TextInput; PasswordInput: typeof PasswordInput; Select: typeof Select; ChoiceGroup: typeof ChoiceGroup; SelectableCard: typeof SelectableCard; ErrorSummary: typeof ErrorSummary; ProgressIndicator: typeof ProgressIndicator; Dialog: typeof Dialog; PageActions: typeof PageActions;
      Term: typeof Term; Glossary: typeof Glossary; Explainer: typeof Explainer; TeamProfile: typeof TeamProfile; PupilCard: typeof PupilCard; PageFeedback: typeof PageFeedback; NotificationBanner: typeof NotificationBanner; ConfirmationPanel: typeof ConfirmationPanel; StateMessage: typeof StateMessage; SkipLink: typeof SkipLink; CookieBanner: typeof CookieBanner;
      ICON_NAMES: IconName[]; ASSETS: Record<string, string>; formatDate: (iso: string, short?: boolean) => string;
    };
  }
}
