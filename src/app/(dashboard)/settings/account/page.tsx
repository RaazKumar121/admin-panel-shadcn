import ContentSection from "@/components/setting/ContentSection";
import ProfileForm from "@/components/setting/ProfileForm";

export default function SettingsProfile() {
  return (
    <ContentSection
    title='Account'
      desc='Update your account settings. Set your preferred language and
          timezone.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
