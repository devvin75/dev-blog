import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPostsSelection extends Struct.ComponentSchema {
  collectionName: 'components_blog_posts_selections';
  info: {
    description: '';
    displayName: 'postsSelection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
  };
}

export interface ConfigSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_links';
  info: {
    description: '';
    displayName: 'socialLink';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    showProfileLink: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    socialmedia: Schema.Attribute.Enumeration<
      ['github', 'youtube', 'twitter', 'facebook', 'whatsapp']
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutFeatureCourse extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature_courses';
  info: {
    description: '';
    displayName: 'FeatureCourse';
    icon: 'rocket';
  };
  attributes: {
    announcements: Schema.Attribute.Blocks;
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    heading: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'hero';
    icon: 'calendar';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'layout.link', true>;
    callToAction: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutMission extends Struct.ComponentSchema {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'alien';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Mission'>;
    showLogo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewletterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_newletter_forms';
  info: {
    displayName: 'newletterForm';
    icon: 'envelop';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutNewsLetterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_news_letter_forms';
  info: {
    displayName: 'newsLetterForm';
    icon: 'envelop';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_infos';
  info: {
    description: '';
    displayName: 'pageInfo';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    cover: Schema.Attribute.Media<'images', true>;
    seo: Schema.Attribute.Component<'seo.seoinformation', false>;
  };
}

export interface LayoutServicesPreview extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'ServicesPreview';
    icon: 'shirt';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SeoSeoinformation extends Struct.ComponentSchema {
  collectionName: 'components_seo_seoinformations';
  info: {
    displayName: 'seoinformation';
    icon: 'search';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.feature-course': LayoutFeatureCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.newletter-form': LayoutNewletterForm;
      'layout.news-letter-form': LayoutNewsLetterForm;
      'layout.page-info': LayoutPageInfo;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seoinformation': SeoSeoinformation;
    }
  }
}
