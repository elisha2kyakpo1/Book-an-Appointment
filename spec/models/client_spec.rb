require 'rails_helper.rb'
RSpec.describe Client do
  let(:subject) do
    described_class.new(
      name: 'elisha',
      email: 'elisha@gmail.com'
    )
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }

    it 'is valid with valid attribute' do
      expect(subject).to be_valid
    end

    it 'The name of the client should exist' do
      subject.username = ''
      expect(subject).not_to be_valid
    end

    it 'The name of the should should not be longer than 20 characters' do
      subject.name = 'weiruwieruiowueriuioweuriuwioeurwioeriouiowerui'
      expect(subject).not_to be_valid
    end

    it 'The email should exist' do
      subject.email = ''
      expect(subject).not_to be_valid
    end

    it 'The email should not be longer than 50 characters' do
      subject.email = 'kwehjkwehfkjewhfewhfkdhfkdhfkdhfkdjfkldjfkljflkwjflwdjflkdjfkldjfklsdf'
      expect(subject).not_to be_valid
    end
  end

  describe 'Associations', type: :model do
    it { is_expected.to have_many(:apointments) }
    it { is_expected.to have_many(:doctors) }
  end
end