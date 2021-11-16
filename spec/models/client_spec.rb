require 'rails_helper'

RSpec.describe Client, :type => :model do
  subject { 
         described_class.new(email: "uwadonat@gmail.com", 
            encrypted_password: "dsfsfsdfsdf",
            encrypted_password: "dsfsfsdfsdf",
          
         )  
  }

  describe "Validations" do
    # it "is valid with valid attributes" do
    #   expect(subject).to be_valid
    # end

    it "is not valid without a encrypted_password" do
      subject.encrypted_password = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an email" do
      subject.email = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
     it { should have_many(:appointments) }
  end

end