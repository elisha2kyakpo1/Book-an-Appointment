require 'rails_helper'

RSpec.describe Appointment, :type => :model do
   
  let(:client) {
    Client.create(
        :email => "uwadonat@gmail.com", 
        :encrypted_password => "dsfsfsdfsdf",
        
    )}

  let(:doctor) {
    Doctor.create(
     
        :phone => "078888",
        :name =>"Donat",
        :email => "uwadonat@gmail.com",
        :about => "spcialiste en chururgie",
        :image => "my image"
    )}

    subject { 
         described_class.new(appointment_date: "25/12/2021", 
            appointment_time: "11:00",
            appointment_date_and_time: "25/12/2021",
            client_id: 1,
            doctor_id: 1
          
         )  
  }

  describe "Validations" do
 
    it "is not valid without doctor_id" do
      subject.doctor_id = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without an appointment date" do
      subject.appointment_date = nil
      expect(subject).to_not be_valid
    end
   end

   describe "Associations" do
    it { should belong_to(:client)}
    it { should belong_to(:doctor)}
  end
end