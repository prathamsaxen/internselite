#include <iostream>
#include <string>

using namespace std;

class Vehicle {
public:
    int vehicleNumber;
    string type;
    Vehicle* next;

    Vehicle(int vNo, string vType) {
        vehicleNumber = vNo;
        type = vType;
        next = nullptr;
    }
};

class TrafficSignal {
private:
    Vehicle* front;
    Vehicle* rear;

public:
    TrafficSignal() {
        front = rear = nullptr;
    }

    void vehicleArrives(int vNo, string vType) {
        Vehicle* newVehicle = new Vehicle(vNo, vType);

        if (!rear) {
            front = rear = newVehicle;
        } else {
            rear->next = newVehicle;
            rear = newVehicle;
        }

        cout << "Vehicle " << vNo
             << " of type " << vType
             << " has arrived at the traffic signal." << endl;
    }

    void greenSignal() {
        if (!front) {
            cout << "No vehicles are waiting at the traffic signal." << endl;
            return;
        }

        Vehicle* temp = front;
        string passedType = temp->type;

        cout << "Vehicle Passed: "
             << "No: " << temp->vehicleNumber
             << " Type: " << temp->type << endl;

        front = front->next;

        if (!front) {
            rear = nullptr;
        }

        delete temp;

        cout << "Green Signal Given. Vehicle of type "
             << passedType << " has passed." << endl;
    }

    void displayVehicles(){
        if(!front){
            cout<<"No vehicles are waiting at the traffic signal."<<endl;
            return;
        }

        Vehicle* temp = front;
        while(temp){
            cout<<"Vehicle No: "<<temp->vehicleNumber<<" Type: "<<temp->type<<endl;
            temp = temp->next;
        }
    }
};


int main(){
    TrafficSignal signal;
    int choice , vNo;
    string vType;

    while(true){
        cout<<"\nTraffic Signal System"<<endl;
        cout<<"1. Vehicle Arrives"<<endl;
        cout<<"2. Green Signal"<<endl;
        cout<<"3. Display Vehicles"<<endl;
        cout<<"4. Exit"<<endl;
        cout<<"Enter your choice: ";
        cin>>choice;

        switch(choice){
            case 1:
                cout<<"Enter Vehicle Number: ";
                cin>>vNo;
                cout<<"Enter Vehicle Type: ";
                cin>>vType;
                signal.vehicleArrives(vNo, vType);
                break;
            case 2:
                signal.greenSignal();
                break;
        
            case 3:
                signal.displayVehicles();
                break;
            case 4:
                cout<<"Exiting..."<<endl;
                return 0;
            default:
                cout<<"Invalid choice. Please try again."<<endl;
                break;
            }
    }

   return 1;
}