from frappe.model.document import Document
import frappe
import re

class StudentRegistration(Document):
    
    def validate_email_address(self):
        """Validate the email address format"""
        try:
            if self.email:
                frappe.utils.validate_email_address(self.email, throw=True)
        except Exception as e:
            frappe.log_error(f"Email validation failed: {str(e)}")
            frappe.throw("Please enter a valid email address")
    
    def validate_phonenumber(self):
        """Validate the phone number format"""
        try:
            if self.phone_number:
                # Regex pattern for international phone numbers
                phone_pattern = r'^\+?[0-9\s\-\(\)]{7,}$'
                if not re.match(phone_pattern, self.phone_number):
                    frappe.throw(
                        "Invalid Phone Number Format. Please use +[country code][number] format",
                        title="Invalid Phone Number"
                    )
        except Exception as e:
            frappe.log_error(f"Phone number validation failed: {str(e)}")
            frappe.throw(
                        "Invalid Phone Number Format. Please use +[country code][number] format",
                        title="Invalid Phone Number"
                    )
    
    def validate(self):
        self.validate_email_address()
        self.validate_phonenumber()