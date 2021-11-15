require 'rails_helper'

RSpec.describe Doctor, :type => :model do
      subject { described_class.new(
         phone: "078888",
         name: "Donat",
         email: "uwadonat@gmail.com",
         about: "spcialiste en chururgie",
         image: "my image"
        ) 
        }

       it "is valid with valid attributes" do
        expect(subject).to be_valid
       end
       it "is not valid without name" do
        subject.name = nil
        expect(subject).to_not be_valid
       end

       it "is valid name" do
        subject.name = "donat"
        expect(subject).to be_valid
       end

       it "is not valid without email" do
        subject.email = nil
        expect(subject).to_not be_valid
       end

       it "is not valid without a phone" do
        subject.phone = nil
        expect(subject).to_not be_valid
       end

       it "is not valid without about" do
        subject.about = nil
        expect(subject).to_not be_valid
       end

       it "is not valid without an image" do
        subject.image = nil
        expect(subject).to_not be_valid
       end
end