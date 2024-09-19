import ContentSection from "@/components/setting/ContentSection";
import ProfileForm from "@/components/setting/ProfileForm";

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
